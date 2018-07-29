//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');// Using ES6 destructuring technique.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b20e91a2b910c251455cbd1') // For filter argument.
    }, {
        $set: {
            coina: 'Carl'
        },
        $inc: {
            coinb: 1
        }
    }, {    
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    
    //client.close();
});

/*

db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b20dfecfcb0287c6391ab67') // For filter argument.
}, {
    $set: {
        completed: true
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

*/