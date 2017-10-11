/**
 * HTTP File Server
 * Exercise 11 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const file = process.argv[3];

http.createServer((req, res) => {
  fs.createReadStream(file).pipe(res);
}).listen(port);

