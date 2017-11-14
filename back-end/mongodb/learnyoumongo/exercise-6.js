/**
 * Remove
 * Exercise 7 of 9
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const client = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/${process.argv[2]}`;
const collection = process.argv[3];
const record = process.argv[4];

client.connect(url, (error, db) => {

  if (error) {
    console.error(error);
    return;
  }

  db.collection(collection).remove({
    _id: record
  }, console.error);

  db.close();

});
