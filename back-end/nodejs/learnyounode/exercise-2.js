/**
 * My First I/O!
 * Exercise 3 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const fs = require('fs');
const file = process.argv[2];

console.log(fs.readFileSync(file)
  .toString().split('\n').length - 1);

