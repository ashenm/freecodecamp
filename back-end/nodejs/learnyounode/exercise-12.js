/**
 * HTTP JSON API Server
 * Exercise 13 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const url = require('url');
const http = require('http');
const port = process.argv[2];

http.createServer((req, res) => {

  const data = {};
  const pURL = url.parse(req.url, true);

  if (pURL.pathname === '/api/parsetime') {
    const date = new Date(pURL.query.iso);
    data.hour = date.getUTCHours();
    data.minute = date.getUTCMinutes();
    data.second = date.getUTCSeconds();
  } else if (pURL.pathname === '/api/unixtime') {
    const date = new Date(pURL.query.iso);
    data.unixtime = date.getTime();
  }

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(data));

}).listen(port)