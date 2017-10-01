/**
 * Pig Latin
 * Translate the provided string to pig latin
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function translatePigLatin(str) {
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      if (i === 0) {
        return str + 'way';
      } else {
        return str.substr(i) + str.slice(0, i) + 'ay';
      }
    }
  }
}
