import { createMembershipTierInput } from '../../components/membershipTier';
import membershipTierFields from './membershipTierFields';

export default {
  title: 'Corporate',
  name: 'corporateMembership',
  type: 'object',
  // Connect the custom component
  components: {
    input: createMembershipTierInput('corporate'),
  },
  fields: membershipTierFields('corporate'),
};
