const {ObjectID} = require('mongodb');// Using ES6 destructuring technique.

const {mongoose} = require('./../server/db/mongoose');
const {Coin} = require('./../server/models/coin');
const {User} = require('./../server/models/user');

//Delete all datas from database
//User.remove({}).then((result) => {
  //  console.log(result);
//});

//Delete single data from database
User.findOneAndRemove({_id: '5b271c3477b78dfc106c6f7b'}).then((user) => {
   console.log(user);
});

//Delete one data from database
// User.findByIdAndRemove('5b273ae8e225f87014f6d46a').then((user) => {
//     console.log(user);
// });