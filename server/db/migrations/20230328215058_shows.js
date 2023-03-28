/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('shows', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('genres')
    table.string('description')
    table.string('tracklist')
    table.string('audio_length')
    table.string('img')
    table.string('resource')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('shows')
}
