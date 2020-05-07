const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const port = 3003;


app.get('/repos', async (req, res) => {
  try {
  res.send('from get');
  } catch (err) {
    res.status(404).send(err);
  }
})

app.listen(port, () => {
  console.log(`listenting on ${port}`);
})