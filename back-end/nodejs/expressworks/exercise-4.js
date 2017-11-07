/**
 * Stylish CSS
 * Exercise 5 of 8
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const express = require('express');
const stylus = require('stylus');
const folder = process.argv[3];
const port = process.argv[2];
const app = express();

app.use(express.static(folder));
app.use(stylus.middleware(folder));

app.listen(port);
