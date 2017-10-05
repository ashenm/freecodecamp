/**
 * Everything Be True
 * Check if the predicate is truthy on all elements of a collection
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(element => {
    return element[pre];
  });
}
