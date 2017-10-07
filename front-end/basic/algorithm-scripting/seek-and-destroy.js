/**
 * Seek and Destroy
 * Remove all specified elements from a given array
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function destroyer(arr) {
  // Remove all the values
  const argv = Array.from(arguments).slice(1);
  return arr.filter(element => !argv.includes(element));
}
