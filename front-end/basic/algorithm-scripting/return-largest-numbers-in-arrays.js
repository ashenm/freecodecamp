/**
 * Return Largest Numbers in Arrays
 * Return an array consisting of the largest number from each provided sub-array
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function largestOfFour(arr) {
  // You can do this!
  return arr.reduce((accumulator, element) => accumulator.concat(Math.max.apply(null, element)), []);
}
