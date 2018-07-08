var mongoose = require('mongoose');

//Investigate what global.Promise does
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


// var {mongoose} = require('./db/mongoose');

//Investigate what global.Promise does
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// var newTodo = new ToDo({
//   text : 'Cook dinner'
// });
//
// var peanut = new ToDo({
//   text: 'buy peanuts',
//   completed: true,
//   completedAt : 123
// });
//
// peanut.save().then((doc)=>{
//   console.log("Saved to do", JSON.stringify(doc, undefined, 2));
// }, (e) =>{
//   console.log("Unable to save to do");
// });




module.exports = {
  mongoose
};
