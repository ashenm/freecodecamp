/**
 * HTTP Client
 * Exercise 7 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const http = require('http');
const url = process.argv[2];

http.get(url, res => {

  if (res.statusCode !== 200) {
    res.resume();
    return;
  }

  res.setEncoding('utf8');
  res.on('data', console.log);

}).on('error', console.error);

