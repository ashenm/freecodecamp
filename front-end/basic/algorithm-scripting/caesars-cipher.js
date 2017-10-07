/**
 * Caesars Cipher
 * Return decoded of a ROT13 encoded string
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function rot13(str) { // LBH QVQ VG!
  const key = 13;
  return str.replace(/[A-Z]/g, match => String.fromCharCode((match.charCodeAt(0) - key + 65) % 26 + 65));
}
