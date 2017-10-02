/**
 * Sum All Odd Fibonacci Numbers
 * Return the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function sumFibs(num) {
  let current = 1;
  let adjacent = 1;
  let accumulate = current;
  while (adjacent <= num) {
    const subsequent = current + adjacent;
    accumulate += (adjacent % 2 === 0) ? 0 : adjacent;
    current = adjacent;
    adjacent = subsequent;
  }
  return accumulate;
}
