
import { Stack, Box, Card, Grid, Text, Tooltip, MenuButton, Menu } from '@sanity/ui';

// go here to edit/add utils
import { useRenderers } from '../utils/renderers';

export const GolfPass = (props) => {
  const {
    value, // The current value object
    onChange, // Sanity's patch function
    members = [], // Validation (wrapped in) passed from Sanity
    elementProps,
  } = props;

  const { renderRateField, renderTextField, renderTextAreaField, renderButton, errorMessages } = useRenderers({
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
              {renderTextField('golfPassHeading', '', '3')}
            </Stack>
          </Card>

          {/* DESCRIPTION */}
          <Card style={{ paddingBottom: '3rem' }}>
            <Stack>
              <Text weight="medium" size={1} style={{ paddingTop: '4rem', paddingBottom: '1.3rem' }}>
                Description
              </Text>
              {renderTextAreaField('golfPassDescription')}
            </Stack>
          </Card>

          {/* Your Grid Layout */}
          <Grid columns={3} gap={1} style={{ alignItems: 'center' }}>
            {/* --- Header Row --- */}
            <Card>
              <Text></Text>
            </Card>
            <Card padding={3}>
              <Text weight="semibold" style={{ textAlign: 'center' }} className="th">
                9 Holes
              </Text>
            </Card>
            <Card padding={3}>
              <Text weight="semibold" style={{ textAlign: 'center' }} className="th">
                18 Holes
              </Text>
            </Card>

            {/* --- Row 1 --- */}
            <Card className="firstCellCard" style={{ paddingLeft: '0px' }}>
              {renderTextField('passTitle', 'firstCell', '3', { paddingLeft: '0px', fontWeight: '600' })}

              <Tooltip
                content={
                  <Box padding={1}>
                    <Text size={1}>Edit definition</Text>
                  </Box>
                }
                animate
                fallbackPlacements={['right', 'left']}
                placement="top"
                portal>
                <span>
                  <MenuButton
                    button={renderButton()}
                    id="menu-button-example"
                    menu={<Menu>{renderTextField('passTitleDef', 'firstCellButton', '3')}</Menu>}
                    popover={{ portal: false, placement: 'bottom' }}
                  />
                </span>
              </Tooltip>
            </Card>
            <Card>{renderRateField('pass9')}</Card>
            <Card>{renderRateField('pass18')}</Card>


          
          </Grid>
        </Stack>
      </Card>
    </Stack>
  );
};
