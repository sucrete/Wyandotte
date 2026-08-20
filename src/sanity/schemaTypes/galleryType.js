export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  preview: {
    select: {
      media: 'images.0',
    },
    prepare(selection) {
      return {
        title: 'Gallery',
        media: selection.media,
      };
    },
  },
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
  ],
};
