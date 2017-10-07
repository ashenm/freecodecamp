/**
 * Confirm the Ending
 * Return true if a given string ends with the given target string
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(-target.length, target.length) === target;
}
