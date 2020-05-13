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
'SELECT name, image FROM actor a INNER JOIN actorimage i ON i.actorid = a.id WHERE movieid = $1', 
'SELECT * FROM character WHERE actorid = $1',
'SELECT * FROM actordescription WHERE actorid = $1',
'SELECT quote, name FROM character c INNER JOIN quote q ON q.characterid = c.id WHERE actorid = $1'
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
