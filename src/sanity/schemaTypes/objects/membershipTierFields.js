import rateValidation from '../../utils/rateValidation';

// Shared field shape for every membership tier object (individualMembership,
// familyMembership, etc.) — heading/description preface plus a Monthly/Yearly
// price pair, namespaced by fieldPrefix so sibling tiers on the same document
// don't collide.
const membershipTierFields = (fieldPrefix) => [
  {
    name: `${fieldPrefix}Heading`,
    type: 'string',
    validation: (rule) => rule.required().max(35),
  },
  {
    name: `${fieldPrefix}Description`,
    type: 'text',
    validation: (rule) => rule.max(300),
  },
  {
    name: `${fieldPrefix}Monthly`,
    type: 'string',
    validation: rateValidation,
  },
  {
    name: `${fieldPrefix}Yearly`,
    type: 'string',
    validation: rateValidation,
  },
];

export default membershipTierFields;
