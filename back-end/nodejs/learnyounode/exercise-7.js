/**
 * HTTP Collect
 * Exercise 8 of 13
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

  let data = '';
  res.setEncoding('utf8');
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(data.length);
    console.log(data)
  });

});

