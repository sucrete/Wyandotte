export default {
  title: 'Memberships',
  name: 'memberships',
  type: 'document',
  groups: [
    { name: 'individual', title: 'Individual' },
    { name: 'family', title: 'Family' },
    { name: 'corporate', title: 'Corporate' },
    { name: 'seniorIndividual', title: 'Senior Individual' },
    { name: 'seniorCouple', title: 'Senior Couple' },
  ],
  preview: {
    prepare() {
      return {
        title: 'Memberships',
      };
    },
  },
  fields: [
    {
      title: 'Individual',
      name: 'individual',
      type: 'individualMembership',
      group: 'individual',
    },
    {
      title: 'Family',
      name: 'family',
      type: 'familyMembership',
      group: 'family',
    },
    {
      title: 'Corporate',
      name: 'corporate',
      type: 'corporateMembership',
      group: 'corporate',
    },
    {
      title: 'Senior Individual',
      name: 'seniorIndividual',
      type: 'seniorIndividualMembership',
      group: 'seniorIndividual',
    },
    {
      title: 'Senior Couple',
      name: 'seniorCouple',
      type: 'seniorCoupleMembership',
      group: 'seniorCouple',
    },
  ],
};
