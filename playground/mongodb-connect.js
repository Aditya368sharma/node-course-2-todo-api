//const MongoClient = require ('mongodb').MongoClient;

const {MongoClient,ObjectID} = require ('mongodb');
// 
// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{

  if (err) {
    return console.log('Unable to connect to Mongo Db server');
  }
console.log('connect to Mongo Db server');
//
// db.collection('Todos').insertOne({
// text: 'Something to do',
// completed: false
// },(err,result) =>{
//   if (err) {
//     return console.log('Unable to inert todo',err);
//   }
// console.log(JSON.stringify(result.ops,undefined,2));
// });


db.collection('Users').insertOne({
name: 'Aditya',
Age: 26,
location: 'Bangalore'

},(err,result) =>{
  if (err) {
    return console.log('Unable to inert Users',err);
  }
console.log(JSON.stringify(result.ops,undefined,2));
});

   db.close();
});
