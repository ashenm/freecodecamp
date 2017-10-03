/**
 * Wherefore art thou
 * Return an array of all objects that have matching properties and value pairs
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line

  // extract property keys
  let keys = Object.keys(source);

  // append to new array if property and value exsists
  arr = collection.filter(function(object) {
    return keys.every((key) => {
      return source[key] === object[key];
    });
  });
  
  // Only change code above this line
  return arr;
}
