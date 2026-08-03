import { createMembershipTierInput } from '../../components/membershipTier';
import membershipTierFields from './membershipTierFields';

export default {
  title: 'Family',
  name: 'familyMembership',
  type: 'object',
  // Connect the custom component
  components: {
    input: createMembershipTierInput('family'),
  },
  fields: membershipTierFields('family'),
};
