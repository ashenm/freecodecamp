/**
 * Steamroller
 * Flatten varying levels of nested arrays
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  for (let i = 0; i < arr.length; i++) {
    arr = arr.reduce((accumulator, element) => {
      return accumulator.concat(element);
    }, []);
  }
  return arr;
}
