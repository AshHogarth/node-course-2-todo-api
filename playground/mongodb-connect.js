//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Error connecting to DB");
  }
  console.log("Connected to MongoDB server!");
  //
  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed : "false"
  // }, (err, result)=>{
  //   if(err){
  //     return console.log("there was an issue inserting", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users collection

  // db.collection('Users').insertOne({
  //   name: "Ashley",
  //   age : "27",
  //   location: "London"
  // }, (err, result)=>{
  //   if(err){
  //     return console.log("there was an issue inserting", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  db.close();
});
