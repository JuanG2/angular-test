const mongoose = require('mongoose');

//Instead of localhost we have to use 127.0.0.1 

mongoose.connect('mongodb://127.0.0.1/angular-auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));