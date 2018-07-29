const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is a valid email!'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
     }]//,
    //firstName: {
    //     type: String,
    //     required: true,
    //     minlength: 1,
    //     trim: true
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    //     minlength: 1,
    //      trim: true
    // },
    // sponsorId: {
    //     type: String,
    //     required: true,
    //     minlength: 1,
    //     trim: true
    // 
//}
});

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
    user.tokens = user.tokens.concat([{access, token}]);
    //user.tokens.push({access, token});

    return user.save().then(() => {
        return token;
    });
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        // return new Promise((resolve, reject) => {
        //     reject();
        //});
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
   };

var User = mongoose.model('User', UserSchema);

module.exports = {User};

// var user = new User({
//     email: 'omarherher03@gmail.com',
//     firstName: 'Mark',
//     lastName: 'Ulgasan',
//     sponsorId: '28jdjehd830'
// });

// user.save().then((doc) => {
//     console.log('User saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });

//db.collection('Users').insertOne({
    //     name: 'Mark',
    //     location: 'Palawan'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    
    //     console.log(JSON.stringify(result.ops, undefined, 2));
//     // });

//     const mongoose = require('mongoose');

// var Marketprice = mongoose.model('Marketprice', {
//     price: {
//         type: Number
//     }
// });
// //var pricetag = 0.001;


// var marketprice = new Marketprice({
//     price: 0.0011
// });

// marketprice.save().then((doc) => {
//     console.log('Marketprice saved', doc);
// }, (e) => {
//     console.log('Unable to save marketprice', e);
// });

// module.exports = {Marketprice};