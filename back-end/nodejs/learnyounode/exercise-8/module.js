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

  let ctr = urls.length;
  const responses = new Array(ctr);

  urls.forEach((url, index) => {
    http.get(url, res => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        responses[index] = data;
        (ctr === 1) ? callback(null, responses) : ctr--;
      });
    }).on('error', callback);
  });

};

