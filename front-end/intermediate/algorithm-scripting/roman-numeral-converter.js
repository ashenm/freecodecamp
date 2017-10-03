/**
 * Roman Numeral Converter
 * Convert the given number into a roman numeral
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const legend = [
  ['I', 'V', 'X'],
  ['X', 'L', 'C'],
  ['C', 'D', 'M'],
  ['M', 'M', 'M']
];

function map(n, l) {
  switch (n){
    case '1':
      return legend[l][0];
    case '2':
      return legend[l][0] + legend[l][0];
    case '3':
      return legend[l][0] + legend[l][0] + legend[l][0];
    case '4':
      return legend[l][0] + legend[l][1];
    case '5':
      return legend[l][1];
    case '6':
      return legend[l][1] + legend[l][0];
    case '7':
      return legend[l][1] + legend[l][0] + legend[l][0];
    case '8':
      return legend[l][1] + legend[l][0] + legend[l][0] + legend[l][0];
    case '9':
      return legend[l][0] + legend[l][2];
    default:
      return '';
  }
}

function convertToRoman(num) {
  let rnm = '';
  num = num.toString().split('').reverse();
  for (let i = num.length - 1; i >= 0; i--) {
    rnm += map(num[i], i);
  }
  return rnm;
}
