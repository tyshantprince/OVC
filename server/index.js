const express = require('express')
const database = require('./database')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

database.initializeMongo();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// retrieves all the notes
app.get('/api/UserReports', (req, res) => {
    database.UserReport.find({}).sort({updatedAt: 'descending'}).exec((err, UserReports) => {
      if (err) return res.status(404).send('Error while getting UserReports!');
      return res.send({UserReports});
    });
  });
  // create a new note
  app.post('/api/UserReport/create', (req, res) => {
    const UserReport = new database.UserReport({DoNow: req.body.DoNow, NextSteps: req.body.NextSteps, Resources: req.body.Resources});
    UserReport.save( (err) => {
      if (err) return res.status(404).send({message: err.message});      
      return res.send({ UserReport });
    });
  });
  // update an existing note with the given object id
  app.post('/api/UserReport/update/:id', (req, res) => {
      var query = {'_id': req.params.id}
      var newData;
      switch(req.body.group){
        case 'DoNows':
            newData = {$push: {DoNow:  {data: req.body.DoNow.data, category: req.body.DoNow.category}}}
            break;
        case 'Resources':
            newData = {$push: {Resources:  {data: req.body.Resources.data, category: req.body.Resources.category}}}
            break;
        case 'NextSteps':
            newData = {$push: {NextSteps:  {data: req.body.NextSteps.data, category: req.body.NextSteps.category}}}
            break;
      }
        
database.UserReport.findOneAndUpdate(query, newData, {upsert:true}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
});


  
  })
  // delete an existing note with the given object id
//   app.post('/api/UserReport/delete/:id', (req,res) => {
//     Note.findByIdAndRemove(req.params.id, (err) => {
//       if (err) return res.status(404).send({message: err.message});
//       return res.send({ message: 'note deleted!' });
//     });
//   });


app.get('/test', function(req, res){
    database.UserReport.find(function(err, UserReports){
        if(err) return res.error(err);
        console.log(UserReports);
        res.json(UserReports);
    })
})


app.listen(3000, () => console.log('Server Running...') )