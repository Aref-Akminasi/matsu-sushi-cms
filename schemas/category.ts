export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category title',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    },
  ],
}
