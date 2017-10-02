/**
 * Diff Two Arrays
 * Return the symmetric difference of the two arrays
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2).filter(function(element) {
    return (arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1) ? true: false;
  });
  return newArr;
}
