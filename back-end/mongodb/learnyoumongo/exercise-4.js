/**
 * Find Project
 * Exercise 5 of 9
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const client = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

// construct insertion data
const insertion = {
  firstName: process.argv[2],
  lastName: process.argv[3]
};

client.connect(url, (error, db) => {

  if (error) {
    console.error(error);
    return;
  }

  db.collection('docs').insert(insertion, (error, data) => {
    (error)
      ? console.error(error)
      : console.log(JSON.stringify(insertion));
  });

  db.close();

});
