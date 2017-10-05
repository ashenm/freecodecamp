/**
 * Arguments Optional
 * Return a function if only one argument provided else returns the sum of two arguments provided
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

function addTogether() {

  const argv = Array.from(arguments);

  if (argv.some(element => typeof element !== 'number')) {
    return undefined;
  }

  return (argv.length === 1) ?
    ((n) => typeof n === 'number' ? n + argv[0] : undefined) :
    argv.reduce((accumulator, element) => accumulator + element);

}
