/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('scheduler', (table) => {
    table.increments('id').primary()
    table.string('show')
    table.string('host')
    table.string('day')
    table.string('time')
    table.string('audio_length')
    table.string('description')
    table.string('image')
    table.string('resource')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('scheduler')
}
