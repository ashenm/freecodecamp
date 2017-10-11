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

  const list = [];
  const extension = `.${ext}`;

  fs.readdir(folder, 'utf8', (err, files) => {

    if (err)
      return callback(err);

    files.forEach(file => {
      if (path.extname(file) === extension) {
        list.push(file);
      }
    });

    callback(null, list);

  });

};

