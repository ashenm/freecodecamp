/**
 * Update
 * Exercise 6 of 9
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const client = require('mongodb').MongoClient;
const url = `mongodb://localhost:27017/${process.argv[2]}`;

// entry being updated
const filter = {
  username: 'tinatime'
}

// value to be updated
const update = {
  $set: {age: 40}
}

client.connect(url, (error, db) => {

  if (error) {
    console.error(error);
    return;
  }

  db.collection('users').update(filter, update, console.error);

  db.close();

});
