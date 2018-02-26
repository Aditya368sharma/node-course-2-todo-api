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
//  db.collection('Users').find({_id: new ObjectID('5a94052572a61a2330d79916')}).toArray().then((docs) => {
//    console.log('Users');
//    console.log(JSON.stringify(docs,undefined,2));
//  }, (err) =>{
//    console.log('Unable to fetch todos',err);
//  });



 // db.collection('Users').find().count().then((count) => {
 //   console.log(`Users Count: ${count}`);
 //   //console.log(JSON.stringify(docs,undefined,2));
 // }, (err) =>{
 //   console.log('Unable to fetch todos',err);
 // });

 db.collection('Users').find({name:'Aditya'}).count().then((count) => {
   console.log(`Users Count: ${count}`);
   //console.log(JSON.stringify(docs,undefined,2));
 }, (err) =>{
   console.log('Unable to fetch todos',err);
 });


   //db.close();
});
