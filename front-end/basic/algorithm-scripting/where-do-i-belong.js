/**
 * Where do I belong
 * Return lowest index at which provided value should be inserted once array sorted.
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}
