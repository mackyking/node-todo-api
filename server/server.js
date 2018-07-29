// mongod.exe --dbpath /Users/user/mongo-data
// cd /Program Files/MongoDB/Server/3.6/bin

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
} else if (env === 'test') {
    process.env.PORT = 3000;
}

//const config = require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Coin} = require('./models/coin');
var {User} = require('./models/user');
//var {authenticate} = require('./middleware/authenticate');

var app =  express();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send({users});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/users/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    User.findById(id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }

        res.send({user});
    }).catch((e) => {
        res.status(400).send();
    });
 });

 app.delete('/users/:id', (req, res) => {
    //Get the id
    var id = req.params.id;
    //Validate the id -> not valid? return the 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //Remove todo by id
    User.findByIdAndRemove(id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        //Success 200 status
        res.send({user});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password', 'firstName', 'lastName', 'sponsorId']);
    var user = new User(body);

    // User.findByToken //Method for models
    // user.generateAuthToken //Method for instance

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
            //res.status(401).send();
        }

        res.send(user);
    }).catch((e) => {
        res.status(401).send();
    });

};

//Private route
app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user)
    //var token = req.header('x-auth');
    //console.log(token);

    // User.findByToken(token).then((user) => {
    //     if (!user) {
    //         //return Promise.reject();
    //         //res.status(401).send();
    //     }

    //     res.send(user);
    // //}).catch((e) => {
    // //     res.status(401).send();
    // });
});

app.listen(3000, () => {
    console.log('Started up at port 3000');
});

module.exports = {app};



// app.patch('/users/:id', (req, res) => {
//     var id = req.params.id;
//     var body = _.pick(req.body, ['lastName', 'Ulgasan']);

//     if (!ObjectID.isValid(id)) {
//         return res.status(404).send();
//     }

//     if (_.isString(body.Ulgasan) && body.Ulgasan) {
//         body.firstName = new Date().getTime();
//     } else {
//         body.lastName = Marin;
//     }
    
//     User.findByIdAndUpdate(id, {$set: body}, {new: true}).then((user) => {
//         if (!user) {
//             return res.status(404).send();
//         }

//         res.send({user});
//     }).catch((e) => {
//         res.status(400).send();
//     });
// });





// app.listen(port, () => {
//     console.log(`Started up at port ${port}`);
// });

//const port = process.env.PORT || 3000;

// app.use(bodyParser.json());


/*

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



app.post('/todos', (req, res) => {
    
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    //Get the id
    var id = req.params.id;
    //Validate the id -> not valid? return the 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    //Remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        //Success 200 status
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
});


var newTodo = new Todo({
    text: 'Cook dinner'
});

omarheher03@gmail.com

newTodo.save().then((doc) => {
    console.log('Added new todo!', doc);
}, (e) => {
    console.log('Unable to save todo')
});

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

newTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo')
});

var newUser = new User({
    email: 'omarherher03@gmail.com',
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo')
});


*/