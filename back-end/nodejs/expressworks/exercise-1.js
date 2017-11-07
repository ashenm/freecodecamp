/**
 * Static
 * Exercise 2 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const index = process.argv[3];
const port = process.argv[2];
const app = express();

app.use(express.static(index));

app.listen(port);
