/**
 * JSON Me
 * Exercise 8 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const fs = require('fs');
const file = process.argv[3];
const port = process.argv[2];
const app = express();

app.all('/books', (request, response) => {
  // read file content asynchronously
  fs.readFile(file, (error, data) => {

    // handle runtime errors
    if (error){
      response.status(500);
      response.end('500 Internal Server Error');
    }

    // send file content parsed as JSON
    response.json(JSON.parse(data));

  });
});

app.listen(port);
