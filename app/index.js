const express = require('express')
const database = require('./database')

const app = express();

database.initializeMongo();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/test', function(req, res){
    database.Kitten.find(function(err, kittens){
        if(err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    })
})


app.listen(3000, () => console.log('Server Running...') )