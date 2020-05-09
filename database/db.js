let Promise = require('bluebird');
const { Pool } = require('pg');

const pool = new Pool({
  "user": "nkaje",
  "host": "localhost",
  "database": "postgres",
  "password": "password",
  "port": 5432,
})

//QUERIES HERE
const queryArr = [
'SELECT movietitle FROM movie WHERE id = $1', 
'SELECT * FROM actor WHERE movieid = $1', 
'SELECT * FROM character WHERE movieid = $1',
'SELECT * FROM actordescription WHERE actorid = $1',
'SELECT * FROM quote WHERE characterid = $1',
'SELECT * FROM actorsinmovies WHERE movieid = $1'
];

const getMovieQuery = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[0], [id], (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}

const getActorQuery = (movieid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[1], [movieid], (err, result) => {
      console.log('in query');
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}

const getActorQuery = (movieid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[1], [movieid], (err, result) => {
      console.log('in query');
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}

module.exports = {
getMovieQuery,
getActorQuery
}; 

// try {
// let result = await pool.query(queryArr[1], [id], (err, result) => {
//   if (err) {
//     console.log(err)
//     return (err);
//   }
//   console.log('result')
//   res.status(200).send(result.rows);
// })
// } catch (err) {
//   res.status(404).send(err);
// }