/**
 * Make It Modular
 * Exercise 6 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const lister = require('./module');

const folder = process.argv[2];
const extension = process.argv[3];

lister(folder, extension, (err, files) => {
  if (err)
    console.error(err);
  files.forEach(file => console.log(file));
});

