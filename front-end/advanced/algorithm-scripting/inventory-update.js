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
  
  delivery:
    for (let i = 0; i < arr2.length; i++) {

      // extract item properties for easy reference
      const item = arr2[i][1];
      const quantity = arr2[i][0];

      // update quantity if item already exists in inventory
      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j][1] === item) {
          arr1[j][0] += quantity;
          continue delivery;
        }
      }

      // alien item: add to inventory
      arr1.push([quantity, item]);

    }

  // sort inventory in alphabetical order
  arr1.sort((previous, next) => (previous[1] > [next[1]]) ? 1 : -1);

  return arr1;
}
