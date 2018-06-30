//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Error connecting to DB");
  }
  console.log("Connected to MongoDB server!");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID("5b1ea405271649d13c4896fe")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) =>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID("5b1ea4e49717c4d155a2870c")
  }, {
    $set: {
      name: "Bobby Dassey"
    },
    $inc : {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });


  //db.close();
});
