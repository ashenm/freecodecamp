/**
 * Smallest Common Multiple
 * Returns LCM of all sequential numbers in a given range 
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function smallestCommons(arr) {

  // range
  let min = Math.min.apply(undefined, arr);
  let max = Math.max.apply(undefined, arr);

  let smallestCommon = lcm(min, min + 1);

  while(min < max) {
    min++;
    smallestCommon = lcm(smallestCommon, min);
  }

  return smallestCommon;
}

/**
 * Calculates Greatest Common Divisor
 * of two nubers using Euclidean algorithm
 */
function gcd(a, b) {
  while (b > 0) {
    let tmp = a;
    a = b;
    b = tmp % b;
  }
  return a;
}

/**
 * Calculates Least Common Multiple
 * for two numbers utilising GCD
 */
function lcm(a, b) {
  return (a * b / gcd(a, b));
}
