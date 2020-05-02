const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); 
const port = 3003;

app.listen(port, () => {
  console.log('listenting on ' + port);
})