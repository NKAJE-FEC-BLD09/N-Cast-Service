const { Pool, Client } = require('pg');

const pool = new Pool({
  "user": "nkaje",
  "host": "localhost",
  "database": "nkajefec",
  "password": "password",
  "port": 5432,
})

//QUERIES HERE
// const client = pool.connect();
// getActorsInMovie (name and image)
const getMovies = async (id, req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movie WHERE id = $1, [id]');
    res.status(200).send(result.row);
  } catch (err) {
    res.status(404).send(err);
  }
  }

const getActors = async (id, req, res) => {
  try {
    const result = await pool.query('SELECT name, image FROM actor WHERE movieid =$1, [id]');
    res.status(200).send(result.row)
  } catch (err) {
    res.status(404).send(err);
  }
}

//getCharacterInMovie (name)
const getCharacters = async (id, req, res) => {
  try {
    const result = await pool.query('SELECT name FROM character WHERE movieid = $1, [id]');
    res.status(200).send(result.row);
  } catch (err) {
    res.status(404).send(err);
  }
}

//modal actor (name, image, and description)
const getModalActorInfo = async (movieid, actorid, req, res) => {
  try {
    const resultDescription = await pool.query('SELECT description FROM actordescription WHERE actorid = $2, [movieid, actorid]');
    const resultActor = await pool.query('SELECT name, image FROM actor WHERE movieid = $1, [movieid, actorid]');
    res.status(200).send(resultDescription.row, resultActor.row);
  } catch (err) {
    res.status(404).send(err);
  }
}


//modal character (quotes and character name)
const getModalCharacterInfo = async (id, req, res) => {
  try {
    const resultQuote = await pool.query('SELECT quote FROM quote WHERE characterid = $1, [id]');
    const resultCharacter = await pool.query('SELECT name FROM quote WHERE id = $1, [id]');
    res.status(200).send(resultQuote.row, resultCharacter.row);
  } catch (err) {
    res.status(404).send(err);
  }
}

// module.exports = {
// getActorsInMovie,
// getCharacterInMovie,
// getModalActorInfo,
// getModalCharacterInfo
//}; 