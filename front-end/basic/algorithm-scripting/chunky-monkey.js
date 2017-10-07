/**
 * Chunky Monkey
 * Splits an array into groups of given size
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const chunk = [];
  while (arr.length) {
    chunk.push(arr.splice(0, size));
  }
  return chunk;
}
