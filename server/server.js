const express = require('express');
const app = express();
const port =process.env.PORT || 3000;
const {pool} = require('./mysql');
const path = require('path');
const router = require('./routes/page');


app.use('/', require('./routes/page'));
app.use('/', express.static('./tor-app/build'));
app.use('/api',express.json());
app.use('/api', express.urlencoded());
app.use('/api/media', express.static('./media'));




app.listen(port, () => { 
  console.log(`Server listening at http://localhost:${port}`)
 });