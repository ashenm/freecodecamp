/**
 * Filtered LS
 * Exercise 5 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(folder, 'utf8', (err, files) => {

  if (err)
    return console.error(err);

  files.forEach(file => {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });

});

