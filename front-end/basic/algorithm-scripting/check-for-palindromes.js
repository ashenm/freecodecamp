/**
 * Check for Palindromes
 * Return true if the given string is a palindrome
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}
