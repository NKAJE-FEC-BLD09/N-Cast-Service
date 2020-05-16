const Promise = require('bluebird');
const { Pool } = require('pg');

const pool = new Pool({
  "user": "nkajfec",
  "host": "localhost",
  "database": "nkajfec",
  "password": "password",
  "port": 5432,
})

//QUERIES HERE
//characters column names got switched around
//actorid === movieid in ^ queries
const queryArr = [
'SELECT id, movietitle FROM movie WHERE id = $1', 
'SELECT  ai.image, a.name, c.charname FROM actor a INNER JOIN character c ON a.id = c.actorid INNER JOIN actorimage ai ON ai.actorid = a.id WHERE a.movieid = $1',
'SELECT a.name, ad.description FROM actordescription ad INNER JOIN actor a ON ad.actorid = a.id WHERE movieid = $1',
'SELECT quote, charname FROM character c INNER JOIN quote q ON q.characterid = c.id WHERE movieid = $1',
];

//inner join
const getQuery = (id) => {
    let data = [];
    for (let i = 0; i < queryArr.length; i++) {
      data.push(getPromise(queryArr[i], id))
    }
    return data;
}

const getPromise = (query, id) => {
  return new Promise((resolve, reject) => {
    pool.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results.rows);
    })
  })
}


module.exports = {
  getQuery
}
