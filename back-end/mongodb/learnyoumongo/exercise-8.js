/**
 * Aggregate
 * Exercise 9 of 9
 *
 * Ashen Gunaratne
 * mail@ashenm.ml
 *
 */

const client = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/learnyoumongo';

// aggregation criteria
const pipeline = {
  $match: {
    size: process.argv[2]
  }
};

// aggregation properties
const options = {
  $group: {
    _id: 'average',
    average: {
      $avg: '$price'
    }
  }
};

client.connect(url, (error, db) => {

  if (error) {
    console.error(error);
    return;
  }

  db.collection('prices').aggregate([pipeline, options]).toArray((error, aggregate) => {
    if (error) {
      console.error(error);
    } else if (!aggregate.length) {
      console.log('No match found');
    } else {
      console.log(parseFloat(aggregate[0]['average'], 10).toFixed(2));
    }
  });

  db.close();

});