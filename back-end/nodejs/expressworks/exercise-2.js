/**
 * JADE
 * Exercise 3 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const folder = process.argv[3];
const port = process.argv[2];
const app = express();

app.set('views', folder);
app.set('view engine', 'jade');

app.get('/home', (request, response) => {
  response.render('index', {
    date: new Date().toDateString()
  });
});

app.listen(port);
