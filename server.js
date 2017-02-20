'use strict'
const routes = require('./app/routes/routes.js');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

routes(app);

app.listen(port, (req, res)=>{
  console.log('Listening on port: ' + port);
});
