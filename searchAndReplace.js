/**
 *
 * Search and Replace
 * Perform a search and replace on the sentence preseving case
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

 function myReplace(str, before, after) {
  let reg = new RegExp(before, "gi");
  let rpl = str.replace(reg, match => {
    let word = '';
    for (let i = 0; i < after.length; i++) {
      let char = match.charAt(i);
      if (char >= 'A' && char <= 'Z') {
        word += after.charAt(i).toUpperCase();
      } else {
        word += after.charAt(i).toLowerCase();
      }
    }
    console.log(word);
    return word;
  });
  return rpl;
}
