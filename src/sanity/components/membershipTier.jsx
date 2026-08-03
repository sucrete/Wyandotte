import { useCallback, useRef, useState } from 'react';
import { Stack, Card, Grid, Text, Button, Flex } from '@sanity/ui';
import { set, unset, useClient } from 'sanity';

// go here to edit/add utils
import { useRenderers } from '../utils/renderers';

// Every membership tier (Individual, Family, Corporate, ...) uses this same
// PDF upload + heading/description + Monthly/Yearly price shape, so one
// factory builds each tier's Studio input component rather than
// hand-duplicating the ~90 lines per tier the way standard/misc/golfPass do
// for rates.
export const createMembershipTierInput = (fieldPrefix) => {
  const pdfField = `${fieldPrefix}Pdf`;
  const headingField = `${fieldPrefix}Heading`;
  const descriptionField = `${fieldPrefix}Description`;
  const monthlyField = `${fieldPrefix}Monthly`;
  const yearlyField = `${fieldPrefix}Yearly`;

  const MembershipTierInput = (props) => {
    const {
      value, // The current value object
      onChange, // Sanity's patch function
      members = [], // Validation (wrapped in) passed from Sanity
      elementProps,
    } = props;

    const { renderRateField, renderTextField, renderTextAreaField, errorMessages } = useRenderers({
      value,
      onChange,
      members,
    });

    // Hand-rolled PDF upload, wired directly to the asset client — same
    // approach as the other fields in this component, rather than Studio's
    // internal field-rendering machinery (renderField), which expects to be
    // called only from within its own default form iteration and throws when
    // invoked standalone like this.
    const client = useClient({ apiVersion: '2025-03-11' });
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const pdfAsset = value?.[pdfField];

    const handleFileChange = useCallback(
      async (event) => {
        const file = event.target.files?.[0];
        event.target.value = ''; // allow re-selecting the same file later
        if (!file) return;
        setUploadError(null);
        setUploading(true);
        try {
          const asset = await client.assets.upload('file', file, { filename: file.name });
          onChange(set({ _type: 'file', asset: { _type: 'reference', _ref: asset._id } }, [pdfField]));
        } catch {
          setUploadError('Upload failed. Please try again.');
        } finally {
          setUploading(false);
        }
      },
      [client, onChange],
    );

    const handleRemove = useCallback(() => {
      onChange(unset([pdfField]));
    }, [onChange]);

    return (
      <Stack className="rate-stack rate-stack-twilight">
        <span tabIndex={-1} {...elementProps} style={{ outline: 'none', display: 'block', height: 0 }} />
        <Card>
          <Stack>
            {/* Validation Error Display (Above Grid) */}
            {errorMessages.length > 0 && (
              <Card padding={3} radius={2} tone="critical" shadow={1} border>
                <Stack space={2}>
                  <Text weight="bold" size={1}>
                    Please correct the following errors:
                  </Text>
                  {errorMessages.map((msg, i) => (
                    <Text key={i} size={1}>
                      {msg}
                    </Text>
                  ))}
                </Stack>
              </Card>
            )}

            {/* PDF UPLOAD (optional) */}
            <Card style={{ paddingTop: '.75rem', paddingBottom: '.75rem' }}>
              <Stack space={2} style={{ paddingBottom: '2.5rem' }}>
                <Text weight="medium" size={1} style={{ paddingBottom: '.75rem' }}>
                  Application PDF
                </Text>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Flex align="center" gap={2}>
                  <Button
                    text={uploading ? 'Uploading…' : pdfAsset ? 'Replace PDF' : 'Upload PDF'}
                    mode="ghost"
                    tone="primary"
                    loading={uploading}
                    disabled={uploading}
                    onClick={() => fileInputRef.current?.click()}
                  />
                  {pdfAsset && !uploading && (
                    <Button text="Remove" mode="bleed" tone="critical" onClick={handleRemove} />
                  )}
                </Flex>
                {uploadError && (
                  <Text size={1} style={{ color: '#c53030' }}>
                    {uploadError}
                  </Text>
                )}
              </Stack>
            </Card>

            {/* HEADING */}
            <Card>
              <Stack>
                <Text weight="medium" size={1} style={{ paddingTop: '.75rem', paddingBottom: '1.3rem' }}>
                  Heading
                </Text>
                {renderTextField(headingField, '', '3')}
              </Stack>
            </Card>

            {/* DESCRIPTION */}
            <Card style={{ paddingBottom: '3rem' }}>
              <Stack>
                <Text weight="medium" size={1} style={{ paddingTop: '4rem', paddingBottom: '1.3rem' }}>
                  Description
                </Text>
                {renderTextAreaField(descriptionField)}
              </Stack>
            </Card>

            {/* Monthly / Yearly, side by side */}
            <Grid columns={2} gap={1} style={{ alignItems: 'center' }}>
              <Card padding={3}>
                <Text weight="semibold" style={{ textAlign: 'center' }} className="th">
                  Monthly
                </Text>
              </Card>
              <Card padding={3}>
                <Text weight="semibold" style={{ textAlign: 'center' }} className="th">
                  Yearly
                </Text>
              </Card>

              <Card>{renderRateField(monthlyField)}</Card>
              <Card>{renderRateField(yearlyField)}</Card>
            </Grid>
          </Stack>
        </Card>
      </Stack>
    );
  };

  MembershipTierInput.displayName = `MembershipTierInput(${fieldPrefix})`;

  return MembershipTierInput;
};
