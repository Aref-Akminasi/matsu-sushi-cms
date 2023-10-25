export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'categories',
      title: 'categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
  ],
}
