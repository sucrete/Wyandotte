import { createMembershipTierInput } from '../../components/membershipTier';
import membershipTierFields from './membershipTierFields';

export default {
  title: 'Senior Individual',
  name: 'seniorIndividualMembership',
  type: 'object',
  // Connect the custom component
  components: {
    input: createMembershipTierInput('seniorIndividual'),
  },
  fields: membershipTierFields('seniorIndividual'),
};
