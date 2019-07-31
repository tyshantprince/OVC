const mongoose = require('mongoose')
const db_connection = 'mongodb://mongo/ovc'

var reportSchema = mongoose.Schema({
    safety: [
      ],
      intro: [
      ],
      finance: [
 
      ],
      housing: [
      ],
      family: [
      ],
      victim: [
      ]
})

UserReport = exports.UserReport = mongoose.model('UserReport', reportSchema)

exports.initializeMongo = function(){
    mongoose.connect(db_connection);

    console.log('Trying to connect to ' + db_connection);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error: We might not be connected'));

    db.once('open', function(){
        console.log('We are connected ')
    })
}