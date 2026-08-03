import { Standard } from "../../components/standard";
import rateValidation from "../../utils/rateValidation";

export default {
  title: 'Standard Rates',
  name: 'standardRates',
  type: 'object',
  // Connect the custom component
  components: {
    input: Standard,
  },
  fields: [
    {
      name: 'standardRatesHeading',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'standardRatesDescription',
      type: 'text',
      validation: (rule) => rule.max(300),
    },

    //* ROW 1 
      {
      name: 'adultTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'adultTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'adult9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'adult18',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 2
      {
      name: 'seniorStudentTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'seniorStudentTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'seniorStudent9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'seniorStudent18',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 3
     {
      name: 'jrTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'jrTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'jr9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'jr18',
      type: 'string',
      validation: rateValidation,
    },
   
  ],
};
