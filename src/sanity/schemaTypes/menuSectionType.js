export default {
  title: 'Menu Section',
  name: 'menuSection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'items',
      title: 'Food',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
