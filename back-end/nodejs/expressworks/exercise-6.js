/**
 * What's in Query
 * Exercise 7 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const port = process.argv[2];
const app = express();

app.get('/search', (request, response) => {
  response.json(request.query);
});

app.listen(port);
