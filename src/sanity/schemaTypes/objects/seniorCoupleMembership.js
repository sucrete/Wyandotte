import { createMembershipTierInput } from '../../components/membershipTier';
import membershipTierFields from './membershipTierFields';

export default {
  title: 'Senior Couple',
  name: 'seniorCoupleMembership',
  type: 'object',
  // Connect the custom component
  components: {
    input: createMembershipTierInput('seniorCouple'),
  },
  fields: membershipTierFields('seniorCouple'),
};
