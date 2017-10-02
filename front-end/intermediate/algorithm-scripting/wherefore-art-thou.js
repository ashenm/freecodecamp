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
  var arr = [];
  // Only change code below this line

  // extract property keys
  var keys = Object.keys(source);
  var len = keys.length;

  // append to new array if property and value exsists
  arr = collection.filter(function(object) {
    var i = 0;
    while (i < len) {
      if (source[keys[i]] !== object[keys[i]]) {
        return false;
      }
      i++;
    }
    return true;
  });
  
  // Only change code above this line
  return arr;
}
