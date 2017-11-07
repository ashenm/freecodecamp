/**
 * Param Pam Pam
 * Exercise 6 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const crypto = require('crypto');
const port = process.argv[2];
const app = express();

app.put('/message/:id', (request, response) => {
  response.end(crypto.createHash('sha1')
    .update(new Date().toDateString() + request.params.id)
    .digest('hex'));
});

app.listen(port);
