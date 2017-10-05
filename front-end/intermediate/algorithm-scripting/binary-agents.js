/**
 * Binary Agents
 * Return an English translated sentence of the passed binary string.
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function binaryAgent(str) {
  return str.replace(/\d+\s*/g, match => {
    return String.fromCharCode(parseInt(match, 2));
  });
}
