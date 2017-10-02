/**
 * Spinal Tap Case
 * Convert a string to spinal case
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str
    .replace(/[A-Z]/g, (match, offset) => (offset) ? `-${match}` : match)
    .replace(/[_-\s]+/g, '-')
    .toLowerCase();
}
