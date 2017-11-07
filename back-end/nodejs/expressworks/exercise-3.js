/**
 * Good Old Form
 * Exercise 4 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const parser = require('body-parser');
const port = process.argv[2];
const app = express();

app.use(parser.urlencoded({
  extended: false
}));

app.post('/form', (request, response) => {
  response.end(request.body.str.split('').reverse().join(''));
});

app.listen(port);
