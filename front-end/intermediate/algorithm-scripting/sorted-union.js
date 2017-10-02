/**
 * Sorted Union
 * Returns a new array of unique values in the order of the original provided arrays
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function uniteUnique(arr) {

  // convert arguments object to an array
  argv = Array.from(arguments);

  var unique = argv.reduce((accumulator, currentValue, currentIndex, array) => {
    currentValue.forEach(element => {
      if (accumulator.indexOf(element) === -1) {
        accumulator.push(element);
      }
    });
    return accumulator;
  }, argv.shift());

  return unique;

}
