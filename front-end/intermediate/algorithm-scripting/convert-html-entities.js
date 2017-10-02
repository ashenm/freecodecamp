/**
 * Convert HTML Entities
 * Convert the characters &, <, >, ", ', in a string to their corresponding HTML entities.
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function convertHTML(str) {
  // &colon;&rpar;
  const reg = /[\&\<\>\"\']/g;
  return str.replace(reg, (match) => {
    switch (match) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '\'':
        return '&apos;';
    }
  });
}
