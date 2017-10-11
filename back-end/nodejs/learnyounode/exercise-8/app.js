/**
 * Juggling ASYNC
 * Exercise 9 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const fetch = require('./module');
const urls = process.argv.slice(2);

fetch(urls, (err, responses) => {
  if (err)
    return console.error(err);
  responses.forEach(response => console.log(response));
});

