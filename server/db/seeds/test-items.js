/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('furniture').del()
  await knex('furniture').insert([
    {
      id: 1,
      name: 'Offset stool',
      designer: 'Philippe Malouin',
      imageURL:
        'https://resident.co.nz/media/uploads/2022_03/offset_table-1_0002_20180426_Thomas_Seear-Budd_Simon_James_1.jpg.1440x1152_q85_upscale.jpg',
    },
    {
      id: 2,
      name: 'Akari lamp',
      designer: 'Isamu Noguchi',
      imageURL:
        'https://cdn.shopify.com/s/files/1/0292/0608/5716/products/IMG_3443_1024x1024.jpg?v=1676330223',
    },
    {
      id: 3,
      name: 'Fat chair',
      designer: 'Tom Dixon',
      imageURL:
        'https://cdn.tomdixon.net/media/catalog/product/f/a/fatdc01ge0973bl_2_2.jpg',
    },
  ])
}
