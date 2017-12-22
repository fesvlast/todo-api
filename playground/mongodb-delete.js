//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to Mongo DB Sever');
  }
  console.log('COnnected to MongoDB server');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
  //   console.log(result);
  // });

// db.collection('Users').findOneAndDelete(
//   {
//     _id: ObjectID("5a397bccd3c64f7c1087d96e")
//   }
// ).then((result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({name: 'Tym'}).then((result) =>{
  console.log(result);
});
  //db.close();
});
