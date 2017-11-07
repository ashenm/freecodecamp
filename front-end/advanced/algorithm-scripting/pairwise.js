/**
 * Pairwise
 * Returns the sum of element pairs indices whose sum equal the second argument
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function pairwise(arr, arg) {
  return arr.reduce((accumulator, value, index, array) => {
    const pair = array.indexOf(arg - value , index + 1);
    if (pair > -1) {
      delete array[pair];
      delete array[index];
      accumulator += index + pair;
    }
    return accumulator;
  }, 0);
}
