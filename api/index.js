import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = express.Router();

router.get('/contests', (req, res) => {
  let contests = {};
  mdb.collection('contests').find({})
     .project({
       categoryName: 1,
       contestName: 1
     })
     .each((err, contest) => {
       assert.equal(null, err);

       if (!contest) { // no more contests
         res.send({ contests });
         return;
       }

       contests[contest._id] = contest;
     });
});

router.get('/names/:nameIds', (req, res) => {
  // Find all the names of all Ids that I  pass in the appi
  // So let map this array of strings as numbers. 
  // If we do map and the handler is just a number that would convert it into an array of numbers, so this would give me an actual 101, 102. 
  // Let's actually put this value in a constant so we'll call it constant name Ids. 
  // And then to find a list of names based on an array in mongo we do ID is another object, on an array in mongo 
  // we do ID is another object, dollar sign in the array, dollar sign in the array, which is nameIds in this case
  const nameIds = req.params.nameIds.split(',').map(ObjectID);
  let names = {};
  
  mdb.collection('names').find( { _id: { $in: nameIds} })
  // We're going to convert these elements into an object that has the name Ids as keys and the values as the name objects
     .each((err, name) => {
       assert.equal(null, err);

       if (!name) { // no more names
         res.send({ names });
         return;
       }

       names[name._id] = name;
     });
});

router.get('/contests/:contestId', (req, res) => {
  mdb.collection('contests')
     .findOne({ _id: ObjectID(req.params.contestId) })
     .then(contest => res.send(contest))
     .catch(console.error);
});

export default router;