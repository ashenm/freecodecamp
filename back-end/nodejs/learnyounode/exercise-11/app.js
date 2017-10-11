/**
 * HTTP Uppercaserer
 * Exercise 12 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const map = require('through2-map');
const http = require('http');
const port = process.argv[2];

http.createServer((req, res) => {
  (req.method === 'POST') ?
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res) :
    res.end('Invalid request!');
}).listen(port);

