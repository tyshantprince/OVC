const mongoose = require('mongoose')
const db_connection = 'mongodb://mongo/ovc'

var kittySchema = mongoose.Schema({
    name: String
})

Kitten = exports.Kitten = mongoose.model('Kitten', kittySchema)

exports.initializeMongo = function(){
    mongoose.connect(db_connection);

    console.log('Trying to connect to ' + db_connection);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error: We might not be connected'));

    db.once('open', function(){
        console.log('We are connected ')
        addRandom()
    })
}

var addRandom = function(){
    var silence = new Kitten({
        name: 'Silence' + Math.random()
    })

    silence.save(function(err, fluffy) {
        if(err) return console.log(err)
        console.log('There is a new cat in the neighborhood');
    })
}