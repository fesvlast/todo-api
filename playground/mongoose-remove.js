const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then( (result) =>{
  console.log(result);
});

//Todo.findOneAndRemove

Todo.findOneAndRemove({
  _id:'5a41350c29e976c33a954926'
}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5a41350c29e976c33a954926').then((todo)=>{
  console.log(todo);
});
