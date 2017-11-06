/**
 * Juggling ASYNC
 * Exercise 9 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const http = require('http');

module.exports = function(urls, callback) {

  let ctr = 1;
  const responses = new Array(urls.length);

  urls.forEach((url, index, array) => {
    http.get(url, res => {

      let data = '';

      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        responses[index] = data;
        ctr < array.length ? ctr++ : callback(null, responses)
      });

    }).on('error', callback);
  });

};

