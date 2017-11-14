/**
 * Find
 * Exercise 3 of 9
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const client = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

// query filter
const filter = {
  age: {$gt: parseInt(process.argv[2], 10)}
};

client.connect(url, (error, db) => {

  if (error) {
    console.error(error);
    return;
  }

  db.collection('parrots').find(filter).toArray((error, documents) => {
    (error) ? console.error(error) : console.log(documents);
  });

  db.close();

});
