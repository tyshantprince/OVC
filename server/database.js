const mongoose = require('mongoose')
const db_connection = 'mongodb://mongo/ovc'

var reportSchema = mongoose.Schema({
    DoNow: [],
    NextSteps: [],
    Resources: []
})

UserReport = exports.UserReport = mongoose.model('UserReport', reportSchema)

exports.initializeMongo = function(){
    mongoose.connect(db_connection);

    console.log('Trying to connect to ' + db_connection);

    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error: We might not be connected'));

    db.once('open', function(){
        console.log('We are connected ')
        addTestReport()
    })
}

var addTestReport = function(){
    var user1 = new UserReport({
        DoNow: ["Call 911"],
        NextSteps: [],
        Resources: ["Visit Law for Seniors Website"]
    })

    user1.save(function(err) {
        if(err) return console.log(err)
        console.log('We just helped someone');
    })
}