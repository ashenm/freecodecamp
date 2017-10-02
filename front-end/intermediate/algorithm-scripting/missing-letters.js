/**
 * Missing letters
 * Return missing letter in the passed letter range
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function fearNotLetter(str) {

  // mend case inconsistencies
  str = str.toLowerCase();

  // range
  const start = str.charCodeAt(0);
  const end = str.charCodeAt(str.length - 1);

  for (let i = start, j = 0; i <= end; i++, j++) {
    if (str[j] !== String.fromCharCode(i)) {
      return String.fromCharCode(i);
    }
  }

}