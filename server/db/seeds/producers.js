/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('producers').del()
  await knex('producers').insert([
    {
      id: 1,
      name: 'Ben UFO',
      email: 'ben@hessleaudio.com',
      image: 'abcdefg',
      description: 'South London Ruffage',
    },
    {
      id: 2,
      name: 'PLO Man',
      email: 'actingpress@gmail.com',
      image: 'abcdefg',
      description: 'PLO Radio Honco',
    },
    {
      id: 3,
      name: 'Powder',
      email: 'moko@apple.jp',
      image: 'abcdefg',
      description: 'japanese ambient',
    },
    {
      id: 4,
      name: 'Samo DJ',
      email: 'samo@samo.org',
      image: 'abcdefg',
      description: 'Bauhaus records producer',
    },
    {
      id: 5,
      name: 'Spencer Kincy',
      email: 'gemini@gmail.com',
      image: 'abcdefg',
      description: 'Underground legend',
    },
    {
      id: 6,
      name: 'Objekt',
      email: 'objekt@pan.com',
      image: 'abcdefg',
      description: 'Show by producer on the PAN label',
    },
    {
      id: 7,
      name: 'Skee Mask',
      email: 'skee@illian.de',
      image: 'abcdefg',
      description: 'Show by Munchener and key connect in Illian Tape Crew',
    },
  ])
}
