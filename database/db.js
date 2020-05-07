const { Pool, Client } = require('pg');

const pool = new Pool({
  "user": "nkaje",
  "host": "localhost",
  "database": "nkajefec",
  "password": "password",
  "port": 5432,
})

//QUERIES HERE

//getActorsInMovie (name and image)
// const getActorsInMovie = (req, res) => {
//   pool.query('quereyyyyy', (err, result) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).json(result.row);
//   })
// }

//getCharacterInMovie (name)
// const getCharacterInMovie = (req, res) => {
//   pool.query('queryyyyyy', (err, result) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).json(result.row);
//   })
// }

//modal actor (name, image, and description)
// const getModalActorInfo = (req, res) => {
//   pool.query('query', (err, result) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).json(result.row);
//   })
// }


//modal character (quotes and character name)
// const getModalCharacterInfo = (req, res) => {
//   pool.query('query', (err, result) => {
//     if (err) {
//       res.status(404).send(err);
//     }
//     res.status(200).json(result.row);
//   })
// }

// module.exports = {
// getActorsInMovie,
// getCharacterInMovie,
// getModalActorInfo,
// getModalCharacterInfo
//}; 