const mongoose = require('mongoose');

//creating database
mongoose.connect('mongodb://localhost:27017/mernsite',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('connection successfull')
    }).catch(e => {
        console.log(e)
    })