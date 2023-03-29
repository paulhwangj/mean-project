const express = require('express');

// creates an express app, express is really just a big chain of middleware
const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
})

module.exports = app;
