/**
 * Sorted Union
 * Returns a new array of unique values in the order of the original provided arrays
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function uniteUnique(arr) {

  let argv = []

  // extract arguments object to an array
  for (let i = 0; i < arguments.length; i++) {
    argv = argv.concat(arguments[i]);
  }

  // filter duplicates
  let unique = argv.filter((element, index) => {
    return argv.indexOf(element) === index;
  });

  return unique;

}
