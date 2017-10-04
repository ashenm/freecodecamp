/**
 * Drop it
 * Drop elements of an array, starting from start until predicate evaluates true
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
