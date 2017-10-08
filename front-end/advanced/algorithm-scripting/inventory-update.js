/**
 * Inventory Update
 * Compare and update 2D inventory array against a provided input
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  const inventory = Array.prototype.concat.apply([], arr1);
  
  for (let i = 0; i < arr2.length; i++) {

    // extract item properties for easy reference
    const item = arr2[i][1];
    const quantity = arr2[i][0];

    // check if item already exsists in inventory
    const position = inventory.indexOf(item);

    // exsisting item: update quantity
    if (position !== -1) {
      const row = Math.floor(position / 2);
      arr1[row][0] += quantity;
      continue;
    }

    // alien item: add to inventory
    arr1.push([quantity, item]);

    }

  // sort inventory in alphabetical order
  arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1);

  return arr1;
}
