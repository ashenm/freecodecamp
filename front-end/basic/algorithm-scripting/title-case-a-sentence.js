/**
 * Title Case a Sentence
 * Return the provided string with the first letter of each word capitalized
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, match => match.toUpperCase());
}
