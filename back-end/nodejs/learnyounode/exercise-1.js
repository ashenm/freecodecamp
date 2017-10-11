/**
 * Baby Steps
 * Exercise 2 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const argv = process.argv.slice(2);

let sum = 0;
argv.forEach(element => sum += Number(element));

console.log(sum);

