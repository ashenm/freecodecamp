/**
 * Convert HTML Entities
 * Convert the characters &, <, >, ", ', in a string to their corresponding HTML entities.
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const entities = {
  '&': '&amp;',
  '<': '&lt',
  '>': '&gt',
  '"': '&quot;',
  '\'': '&apos;'
};

function convertHTML(str) {
  // &colon;&rpar;
  return str.split('').map((char) => entities[char] || char);
}
