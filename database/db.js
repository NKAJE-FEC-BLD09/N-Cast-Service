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
'SELECT id, movietitle FROM movie WHERE id = $1', 
'SELECT * FROM actor WHERE movieid = $1', 
'SELECT * FROM character WHERE movieid = $1',
'SELECT * FROM actordescription WHERE actorid = $1',
'SELECT * FROM quote WHERE characterid = $1',
'SELECT * FROM actorsinmovies WHERE movieid = $1'
];

// const getQuery = (id) => {
//   for (let query of queryArr) {
//     console.log(query);
//     getPromise = (id) => {
//       return new Promise((resolve, reject) => {
//             pool.query(query, [id], (err, result) => {
//                 if (err) {
//                   console.log(err);
//                   reject(err);
//                 }
//                 resolve(result.rows);
//             })
//           })
//     }
//   }
// }


// module.export = {
//   getQuery
// }

const getMovieQuery = (movieid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[0], [movieid], (err, result) => {
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
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}

const getCharacterQuery = (movieid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[2], [movieid], (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}

const getDescriptionQuery = (actorid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[3], [actorid], (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}

const getQuoteQuery = (characterid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[4], [characterid], (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve(result.rows);
    })
  })
}


const getInMovieQuery = (movieid) => {
  return new Promise((resolve, reject) => {
    pool.query(queryArr[5], [movieid], (err, result) => {
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
getActorQuery,
getCharacterQuery,
getDescriptionQuery,
getQuoteQuery,
getInMovieQuery
}; 
