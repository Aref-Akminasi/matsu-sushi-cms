export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
  ],
}
