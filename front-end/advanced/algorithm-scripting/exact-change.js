/**
 * Exact Change
 * Returns change due in relation to arguments provided 
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function checkCashRegister(price, cash, cid) {

  // Here is your change, ma'am.
  const change = [];

  // the drawer
  const drawer = {
    TOTAL: 0
  };

  // currency map
  const map = {
    'ONE HUNDRED' : 100,
    'TWENTY'      : 20,
    'TEN'         : 10,
    'FIVE'        : 5,
    'ONE'         : 1,
    'QUARTER'     : 0.25,
    'DIME'        : 0.10,
    'NICKEL'      : 0.05,
    'PENNY'       : 0.01
  }

  // balance due
  let balance = cash - price;

  // initialise cid as an object
  cid.forEach(element => {
    drawer.TOTAL += element[1];
    drawer[element[0]] = element[1];
  });

  if (drawer.TOTAL < balance) {
    return 'Insufficient Funds';
  }

  if (drawer.TOTAL === balance) {
    return 'Closed';
  }

  Object.keys(map).forEach(key => {

    const reduction = Math.floor(balance / map[key]) * map[key];

    if (reduction >= drawer[key]) {
      change.push([key, drawer[key]]);
      balance = Math.round((balance - drawer[key]) * 100) / 100;
    } else if (reduction > 0) {
      change.push([key, reduction]);
      balance = Math.round((balance - reduction) * 100) / 100;
    }

  });

  return (balance === 0) ? change : 'Insufficient Funds';

}
