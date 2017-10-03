/**
 * DNA Pairing
 * Return missing DNA nucleobases in a pair
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const pairs = {
  A: 'A',
  C: 'C',
  G: 'T',
  T: 'G'
};

function pairElement(str) {
  return str.split('').map(base => [base, pairs[base]]);
}
