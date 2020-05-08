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
'SELECT * FROM movie WHERE id = $1', 
'SELECT * FROM actor WHERE Schema.movieid = $1', 
'SELECT * FROM character WHERE movieid = $1',
'SELECT * FROM actordescription WHERE actorid = $1',
'SELECT * FROM quote WHERE characterid = $1',
'SELECT * FROM actorsinmovies WHERE movieid = $1'
];

const getQuery = (id) => {
    for (let query of queryArr) {
      return new Promise((resolve, reject) => {
        pool.query(query, [id], (err, result) => {
          console.log('in query');
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(result.rows);
        })
      })
    }
}

module.exports = {
getQuery
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