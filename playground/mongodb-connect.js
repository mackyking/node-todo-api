//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');// Using ES6 destructuring technique.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }  
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do 2',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // // });
    // db.collection('Coins').insertOne({
    //     coinA: 500,
    //     coinB: 500
    //     }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
        //_id: is 12 bytes value, consist of 4 bytes of timestamp, 3 bytes machine identifier, 2 bytes of process id, 3 bytes counter random value similar to mysql.
       // console.log(result.ops[0]._id.getTimestamp());
       //console.log(result.ops[0]._id);//Getting the user id
    
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    
   
    // db.collection('Users').insertOne({
    //    // email: 'omarherher03@gmail.com',
    //     firstName: 'Mark',
    //     lastName: 'Ulgasan',
    //     sponsorId: '2ks92psluw',

    //     }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     //_id: is 12 bytes value, consist of 4 bytes of timestamp, 3 bytes machine identifier, 2 bytes of process id, 3 bytes counter random value similar to mysql.
    //    // console.log(result.ops[0]._id.getTimestamp());
    //    //console.log(result.ops[0]._id);//Getting the user id
    
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.close();
   });

    /*
    console.log('Connected to MongoDB server');
    
    db.collection('User').insertOne({
        amount: 500,
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
    
        //console.log(result.ops[0]._id.getTimestamp());
    
        //console.log(result.ops[0]._id);//Getting the user id
    
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    
    db.collection('Coinb').insertOne({
        amount: 500,
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
    
        //console.log(result.ops[0]._id.getTimestamp());
    
        //console.log(result.ops[0]._id);//Getting the user id
    
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    




       db.collection('Users').insertOne({
    name: 'Mark Ulgasan',
    age: 32,
    location: 'Palawan'
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }

    console.log(result.ops[0]._id.getTimestamp());

    //console.log(result.ops[0]._id);//Getting the user id

    //console.log(JSON.stringify(result.ops, undefined, 2));
});


    db.collection('Todos').insertOne({
        _id: 123,
        text: 'Something to do',
        Completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
   
    // New group codes
     
   db.collection('Users').insertOne({
    name: 'Mark',
    location: 'Palawan'
}, (err, result) => {
    if (err) {
        return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
});
   
// New group codes, Object destructuring of ES6 syntax
var user = {name: 'Mark', age: 32};
var {name} = user;
console.log(name);

    */