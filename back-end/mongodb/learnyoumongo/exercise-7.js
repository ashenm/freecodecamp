/**
 * Count
 * Exercise 8 of 9
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const client = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

// count criteria
const filter = {
  age: {$gt: parseInt(process.argv[2], 10)}
};

client.connect(url, (error, db) => {

  if (error) {
    console.error(error);
    return;
  }

  db.collection('parrots').count(filter, (error, count) => {
    (error)
      ? console.error(error)
      : console.log(count);
  });

  db.close();

});
