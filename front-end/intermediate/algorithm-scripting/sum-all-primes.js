/**
 * Sum All Primes
 * Sum all the prime numbers up to and including the provided unsigned number
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function sumPrimes(num) {
  let accumulate = 0;
  while (num > 0) {
    if (isPrime(num)) {
      accumulate += num;
    }
    num--;
  }
  return accumulate;
}

// TODO use a more complex algorithm
function isPrime(num) {
  for (let i = num - 1; i < 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
