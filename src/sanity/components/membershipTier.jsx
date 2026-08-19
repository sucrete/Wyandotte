import { Stack, Card, Grid, Text } from '@sanity/ui';

// go here to edit/add utils
import { useRenderers } from '../utils/renderers';

// Every membership tier (Individual, Family, Corporate, ...) uses this same
// heading/description + Monthly/Yearly price shape, so one factory builds
// each tier's Studio input component rather than hand-duplicating the ~90
// lines per tier the way standard/misc/golfPass do for rates.
export const createMembershipTierInput = (fieldPrefix) => {
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
