/**
 * Helo World
 * Exercise 1 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const port = process.argv[2];
const app = express();

app.get('/home', (request, response) => {
  response.end('Hello World!');
});

app.listen(port);
