import { Miscellaneous } from "../../components/miscellaneous";
import rateValidation from "../../utils/rateValidation";

export default {
  title: 'Miscellaneous Rates',
  name: 'miscRates',
  type: 'object',
  // Connect the custom component
  components: {
    input: Miscellaneous,
  },
  fields: [
    {
      name: 'miscHeading',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'miscDescription',
      type: 'text',
      validation: (rule) => rule.max(300),
    },

    //* ROW 1 
      {
      name: 'powerCartTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'powerCartTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'powerCart9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'powerCart18',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 2
      {
      name: 'pullCartTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'pullCartTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'pullCart9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'pullCart18',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 3
     {
      name: 'clubsTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'clubsTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'clubs9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'clubs18',
      type: 'string',
      validation: rateValidation,
    },

    //* ROW 4
     {
      name: 'trailFeeTitle',
      type: 'string',
      validation: (rule) => rule.required().max(35),
    },
    {
      name: 'trailFeeTitleDef',
      type: 'string',
      validation: (rule) => rule.max(35),
    },
    {
      name: 'trailFee9',
      type: 'string',
      validation: rateValidation,
    },
    {
      name: 'trailFee18',
      type: 'string',
      validation: rateValidation,
    },
   
  ],
};
