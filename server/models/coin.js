const mongoose = require('mongoose');

var Coin = mongoose.model('Coin', {
    coinA: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    },
    coinB: {
        type: Number,
        required: true,
        minlength: 1,
        trim: true
    }
});

// var coin = new Coin({
//     coinA: 500,
//     coinB: 500
// });

// coin.save().then((doc) => {
//     console.log('Coin saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });


module.exports = {Coin};


// var otherTodo = new Todo({
//     text: '  Edit this video  '
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save', e);
// });



// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: true,
//     completedAt: 123
// });