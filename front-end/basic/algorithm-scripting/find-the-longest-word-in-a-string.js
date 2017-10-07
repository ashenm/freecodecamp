/**
 * Find the Longest Word in a String
 * Return the length of the longest word in the provided sentence
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function findLongestWord(str) {
  return str.split(/\s/).reduce((previous, element) => Math.max(previous, element.length), 0);
}
