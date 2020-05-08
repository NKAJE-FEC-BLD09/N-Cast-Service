const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const Promise = require('bluebird');
const db = require('../database/db.js');
const port = 3003;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/:id', (req, res) => {
  let id = req.params.id;
  // let query = db.getQuery

  db.getQuery(id)
  .then((result) => {
    res.status(200).send(result);
  })
  .catch((err) => {
    console.log(err);
    res.status(404).send(err);
  })
});

app.listen(port, () => {
  console.log(`listenting on ${port}`);
})