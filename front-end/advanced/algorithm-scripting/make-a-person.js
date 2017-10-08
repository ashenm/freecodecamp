/**
 * Make a Person
 * https://www.freecodecamp.org/challenges/make-a-person
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let _first = firstAndLast.split(' ')[0];
  let _last = firstAndLast.split(' ')[1];

  this.getFirstName = () => _first;

  this.getLastName = () => _last;

  this.getFullName = () => `${_first} ${_last}`;

  this.setFirstName = first => _first = first;

  this.setLastName = last => _last = last;

  this.setFullName = firstAndLast => {
    const argv = firstAndLast.split(' ');
    _first = argv[0];
    _last = argv[1];
    return `${_first} ${_last}`;
  };

};
