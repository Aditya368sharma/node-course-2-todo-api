const {MongoClient,ObjectID} = require ('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if (err) {
    return console.log('Unable to connect to Mongo Db server');
  }
 console.log('connect to Mongo Db server');
 //
 // // delete many
 // db.collection('Users').deleteMany({name:'Aditya'}).then((result) =>{
 //   console.log(result);
 // });
 //
 // // delete one
 // db.collection('Users').deleteOne({name:'Aditya'}).then((result) =>{
 //   console.log(result);
 // });


  // delete find and delete
  db.collection('Users').findOneAndDelete({name:'Adi'}).then((result) =>{
    console.log(result);
  });


   //db.close();
});
