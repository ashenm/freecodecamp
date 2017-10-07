/**
 * Truncate a string
 * Truncate a string if it is longer than the given maximum string length
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  return (str.length > num) ? 
    str.slice(0, (num > 3) ? num - 3 : num) + '...' : str;
}
