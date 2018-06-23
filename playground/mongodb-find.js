//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Error connecting to DB");
  }
  console.log("Connected to MongoDB server!");

  //Query the entire collection
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b1ea405271649d13c4896fe')
  // }).toArray().then((docs)=> {
  //   console.log("todos");
  //   console.log(JSON.stringify(docs,undefined,2));
  // }, (err)=>{
  //   console.log("Unable to get to dos", err);
  // });

  // db.collection('Todos').find().count().then((count)=> {
  //   console.log(`todos count : ${count}`);
  // }, (err) => {
  //   console.log("Unable to fetch to dos", err);
  // });

  db.collection('Users').find({name: 'Ashley'}).toArray().then((count)=> {
    console.log(JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch to dos", err);
  });

  db.close();
});
