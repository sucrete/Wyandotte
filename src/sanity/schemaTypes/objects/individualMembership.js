import { createMembershipTierInput } from '../../components/membershipTier';
import membershipTierFields from './membershipTierFields';

export default {
  title: 'Individual',
  name: 'individualMembership',
  type: 'object',
  // Connect the custom component
  components: {
    input: createMembershipTierInput('individual'),
  },
  fields: membershipTierFields('individual'),
};
