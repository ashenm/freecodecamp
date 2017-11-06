/**
 * Baby Steps
 * Exercise 2 of 13
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const argv = process.argv.slice(2);

console.log(argv.reduce((accumulate, element) =>
            accumulate += Number(element), 0));
