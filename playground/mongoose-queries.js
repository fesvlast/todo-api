const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a3f8e7dc7de2a0035bcf415';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });

// Todo.findById({
//   _id: id
// }).then((todo) =>{
//   if(!todo){
//     return console.log('Id not found!');
//   }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e))

var id = '5a3e5036c48d164170111887';
if(!ObjectID.isValid(id)){
  console.log('Id is not valid!');
}else {
  User.findById({
    _id: id
  }).then((user) =>{
    if (!user) {
      return console.log('User not found');
    }
    console.log('User by ID: ',user);
  }).catch((e) => console.log(e));
}
