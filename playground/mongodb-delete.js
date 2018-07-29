//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');// Using ES6 destructuring technique.

// ES6 coding, object destructuring.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    
    /*

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b20e240ed815f26402ef18c')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });


    // db.collection('Users').deleteMany({name: 'Mark'});

    //Find one & delete
    
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
 });


 //Delete many
    db.collection('Users').deleteMany({coina: 500});
    //.then((result) => {
      //  console.log(result);});
    

    //Delete many
    db.collection('Todos').deleteMany({text: 'Eat lunch.'}).then((result) => {
       console.log(result);
   });

   //Delete One
    db.collection('Todos').deleteOne({text: 'Walking'}).then((result) => {
      console.log(result);
    });

    
*/
    //client.close();
});

    // Delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
       // console.log(result);
   // });

    // Delete One
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
      // console.log(result);
    //});

    // Find one & delete
    
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
       // console.log(result);
    // });
