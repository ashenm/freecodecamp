/**
 * My First ASYNC I/O!
 * Exercise 4 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, string) => {
  if (err)
    return console.error(err);
  console.log(string.split('\n').length - 1);
});

