/**
 * DNA Pairing
 * Return missing DNA nucleobases in a pair
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

 function pairElement(str) {
  pairs = [];
  str.toUpperCase().split('').forEach((base, index, array) => {
    switch (base) { 
      case 'A':
        pairs.push([base, 'T']);
        break;
      case 'C':
        pairs.push([base, 'G']);
        break;
      case 'G':
        pairs.push([base, 'C']);
        break;
      case 'T':
        pairs.push([base, 'A']);
        break;
      default:
        throw new Error(`Invalid nucleobase '${base}' at index ${index}!`);
    }
  });
  return pairs;
}