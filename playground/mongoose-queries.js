const {ObjectID} = require('mongodb');// Using ES6 destructuring technique.

const {mongoose} = require('./../server/db/mongoose');
const {Coin} = require('./../server/models/coin');
const {User} = require('./../server/models/user');

// var id = '5b271ef976ff15681cb719d8';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid!');
// }

User.findById('5b271ef976ff15681cb719d8').then((user) => {
    if (!user) {
        return console.log('Unable to find user!');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});


// User.find({
//     _id: id
// }).then((users) => {
//     // if (!users) {
//     //     return console.log('Id not found!');
//     // }
//     console.log('Users', users);
// });

// //
// User.findOne({
//     _id: id
// }).then((user) => {
//     if (!user) {
//         return console.log('Id not found!');
//     }
//     console.log('User', user);
// });

// //
// User.findById(id).then((user) => {
//     if (!user) {
//         return console.log('Id not found!');
//     }
//     console.log('User By Id', user);
// });


// User.findById(id).then((user) => {
//     if (!user) {
//         return console.log('Id not found!');
//     }
//     console.log('User By Id', user);
// }).catch((e) => console.log(e));



/*


Todo.findById('5b271ef976ff15681cb719d8').then((user) => {
    if (!user) {
        return console('User not found!');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

*/