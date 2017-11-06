/**
 * Make It Modular
 * Exercise 6 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const fs = require('fs');
const path = require('path');

module.exports = function(folder, ext, callback) {

  let sanitised;
  const extension = `.${ext}`;

  fs.readdir(folder, 'utf8', (err, files) => {

    if (err)
      return callback(err);

    sanitised = files.filter(
      file => path.extname(file) === extension);

    callback(null, sanitised);

  });

};

