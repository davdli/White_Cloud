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
    name: 'Twinkle Twinkle Little Star',
    artist: 'Jane Taylor',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2021/04/twinkle-twinkle-little-star-piano.jpg',
    sheet: 'https://www.music-for-music-teachers.com/images/xtwinkle-piano-easy.gif.pagespeed.ic.xyk2Wg3Efw.png'
  },
  {
    name: 'Happy Birthday to You',
    artist: 'Patty Hill',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2020/10/happy-birthday-piano.jpg',
    sheet: 'https://www.music-for-music-teachers.com/images/xhappy-birthday-basic-arrangement-to-transpose.jpg.pagespeed.ic.w5LNsvs8y5.jpg'
  },
  {
    name: 'Star Wars Theme',
    artist: 'John Williams',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2021/04/star-wars-piano-letters.png',
    sheet: 'https://bluebirdmusiclessons.files.wordpress.com/2021/09/star-wars-beginner-piano.png'
  },
  {
    name: 'Ode To Joy',
    artist: 'Ludwig van Beethoven',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2019/12/ludwig-van-beethoven-page-artiste-piano.jpg',
    sheet: 'https://i.pinimg.com/originals/c3/0b/e6/c30be6719cf66561313f8dd937ed62ff.gif'
  },
  {
    name: 'Jingle Bells',
    artist: 'James Pierpont',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/91JN33kRNDL.jpg',
    sheet: 'https://i.pinimg.com/originals/4f/7b/81/4f7b8136b573c817b309c1730428802c.gif'
  },
  {
    name: "Pachelbel's Canon",
    artist: 'Johann Pachelbel',
    cover: 'https://i.scdn.co/image/ab67616d0000b2735488d2fbe87b4e00e933cd8b',
    sheet: 'https://i.pinimg.com/736x/45/8f/ff/458fff2cdd8768e26e80519c2d276a28--easy-keys-piano-sheet.jpg'
  },
  {
    name: 'Mary Had a Little Lamb',
    artist: 'Sarah Josepha Hale',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2021/04/mary-had-a-little-lamb-piano-letters.jpeg',
    sheet: 'https://www.pianosongdownload.com/mary_had_a_little_lamb-piano.jpg'
  },
  {
    name: 'London Bridge is Falling Down',
    artist: 'The Wiggles',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2021/04/london-bridge-piano-letters.jpeg',
    sheet: 'https://i.pinimg.com/originals/4f/7b/81/4f7b8136b573c817b309c1730428802c.gif'
  },
  {
    name: 'The Lord of the Rings Theme',
    artist: 'Howard Shore',
    cover: 'https://latouchemusicale.com/wp-content/uploads/2021/04/The-Lord-Of-The-Rings-piano-letters.jpeg',
    sheet: 'https://imgv2-1-f.scribdassets.com/img/document/288338055/original/501cb1ee15/1649253465?v=1'
  },
  {
    name: 'The A Team',
    artist: 'Ed Sheeran',
    cover: 'https://i1.sndcdn.com/artworks-f7CFN6wekVyP9evN-44srWg-t500x500.jpg',
    sheet: 'https://s3.amazonaws.com/halleonard-pagepreviews/HL_DDS_123072631uo5JJfm5.png'
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
