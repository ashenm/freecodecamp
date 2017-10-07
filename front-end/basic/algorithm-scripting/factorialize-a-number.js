/**
 * Factorialize a Number
 * Return the factorial of the provided integer
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function factorialize(num) {
  return factorial(num, 1);
}

function factorial(n, accumulator) {
  if (n <= 1) {
    return accumulator;
  }
  return factorial(n - 1, n * accumulator);
}
