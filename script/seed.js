'use strict'

const {db, models: {User, Song} } = require('../server/db');

const usersData = [
  {
    username: 'davdli',
    password: 'FullstackAcademy1'
  },
  {
    username: 'jasonnnz',
    password: 'FlatironSchool1'
  },
]

const songsData = [
  {
    name: 'Canon in D',
    artist: 'Johann Pachelbel',
    cover: 'https://m.media-amazon.com/images/I/41BXPQHW2DL.jpg',
    sheet: 'https://i.pinimg.com/736x/45/8f/ff/458fff2cdd8768e26e80519c2d276a28--easy-keys-piano-sheet.jpg'
  },
  {
    name: 'Jingle Bells',
    artist: 'James Pierpont',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/91JN33kRNDL.jpg',
    sheet: 'https://i.pinimg.com/originals/4f/7b/81/4f7b8136b573c817b309c1730428802c.gif'
  },
]

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all(
    usersData.map(user => {
      return User.create(user);
    })
  );

  const songs = await Promise.all(
    songsData.map(song => {
      return Song.create(song)
    })
  );

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users,
    songs
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
