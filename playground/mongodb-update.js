//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to Mongo DB Sever');
  }
  console.log('COnnected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate(
//     {
//     _id: new ObjectID("5a3d3d00c77a5becf59df900")
//     },
//     {
//       $set: {completed: false}
//     },
//     {
//       returnOriginal: false
//     }
// ).then( (result) =>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate(
  {
    _id: ObjectID("5a39110c416af32808fadcd7")
  },
  {
    $set: {name: 'Jane Smith'},
    $inc: {age: 1}
  },
  {
    returnOriginal: false
  }
).then((result) =>{
  console.log(result);
});



 //  db.close();
});
