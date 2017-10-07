/**
 * Mutations
 * Return true if a given string contains all specified letters
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function mutation(arr) {
  const match = arr[1].toLowerCase();
  const string = arr[0].toLowerCase();
  return match
    .split('')
    .every(element => string.indexOf(element) !== -1);
}
