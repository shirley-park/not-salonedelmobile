/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('scheduler').del()
  await knex('scheduler').insert([
    {
      id: 1,
      show: 'Hessle',
      host: 'Ben UFO',
      day: 'Thursday',
      time: '9:00AM',
      audio_length: '56.55',
      description: 'adads',
      image: 'abcdefghijk',
      resource: 'saadad',
    },
    {
      id: 2,
      show: 'PLO radio',
      host: 'PLO Man, Hashman Deejay',
      day: 'Wednesday',
      time: '9:00PM',
      audio_length: '56.55',
      description: 'asdasd',
      image: 'abcdefghijk',
      resource: 'saadad',
    },
    {
      id: 3,
      show: 'airy',
      host: 'Power, Five and Andry',
      day: 'Tuesday',
      time: '8:00AM',
      audio_length: '56.55',
      description: 'asdasd',
      image: 'abcdefghijk',
      resource: 'saadad',
    },
    {
      id: 4,
      show: 'Breakfast with Flo',
      host: 'Samo DJ',
      day: 'Monday',
      time: '10:00AM',
      audio_length: '56.55',
      description: 'asadas',
      image: 'abcdefghijk',
      resource: 'saadad',
    },
  ])
}
