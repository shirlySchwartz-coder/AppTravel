const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
const {pool} = require('./mysql');


app.get('/', (req, res) => {
  res.send('Tor App!');
});


app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`) });