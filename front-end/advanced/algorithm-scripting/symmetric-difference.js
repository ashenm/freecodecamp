/**
 * Symmetric Difference
 * Returns symmetric difference of two or more arrays
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function sym(args) {
  argv = Array.from(arguments).reduce(diffArray);
  return argv.filter((element, index, array) => index === array.indexOf(element));
}


/**
 * Returns symmetric difference of two arrays
 */
function diffArray(arr1, arr2) {
  return arr1
    .filter(element => !arr2.includes(element))
    .concat(arr2.filter(element => !arr1.includes(element)));
}
