import { GolfPass } from "../../components/golfpass";
import rateValidation from "../../utils/rateValidation";

export default {
  title: 'Golf Pass',
  name: 'golfPass',
  type: 'object',
  // Connect the custom component
  components: {
    input: GolfPass,
  },
  fields: [
    {
      name: 'golfPassHeading',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'golfPassDescription',
      type: 'text',
      validation: (rule) => rule.max(300),
    },

    //* ROW 1 
      {
      name: 'passTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'passTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'pass9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'pass18',
      type: 'string',
      validation: rateValidation,
    },

   
  ],
};
