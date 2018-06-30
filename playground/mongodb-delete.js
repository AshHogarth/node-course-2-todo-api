//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log("Error connecting to DB");
  }
  console.log("Connected to MongoDB server!");

  //DeleteMany
  db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
    console.log(result);
  })

  //DeleteOne

  //FindOneAndDelete
db.collection('Users').findOneAndDelete({_id: ObjectID("123")}).then((result) =>{
  console.log(result);
})

  //db.close();
});
