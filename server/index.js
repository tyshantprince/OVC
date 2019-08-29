const express = require('express')
const database = require('./database')
const cors = require('cors');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');

const app = express();

database.initializeMongo();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// retrieves all the notes
app.get('/api/UserReports', (req, res) => {
  database.UserReport.find({}).sort({
    updatedAt: 'descending'
  }).exec((err, UserReports) => {
    if (err) return res.status(404).send('Error while getting UserReports!');
    return res.send({
      UserReports
    });
  });
});
// create a new note
app.post('/api/UserReport/create', (req, res) => {
  // return res.send(req.body.UserReport)
  const UserReport = new database.UserReport({
    Safety: req.body.Safety,
    Finance: req.body.Finance,
    Housing: req.body.Housing,
    Family: req.body.Family,
    VictimRights: req.body.Victim
  });
  UserReport.save((err) => {
    if (err) return res.status(404).send({
      message: err.message
    });
    return res.send({
      UserReport
    });
  });
});
// update an existing note with the given object id
app.post('/api/UserReport/update/:id', (req, res) => {
  var query = {
    '_id': req.params.id
  }
  var newData;
  switch (req.body.category) {
    case 'Safety':
      newData = {
        $push: {
          safety: {
              [req.body.group]: req.body.data
          }
        }
      }
      break;
    case 'Finance':
      newData = {
        $push: {
          finance: {
              [req.body.group]: req.body.data
          }
        }
      }
      break;
    case 'Housing':
      newData = {
        $push: {
          housing: {
              [req.body.group]: req.body.data
          }
        }
      }
      break;
    case 'Family':
      newData = {
        $push: {
          family: {
              [req.body.group]: req.body.data
          }
        }
      }
      break;
    case 'VictimRights':
      newData = {
        $push: {
          victim: {
              [req.body.group]: req.body.data
          }
        }
      }
      break;
    default:
      newData = {
        $push: {
          intro: {
              [req.body.group]: req.body.data
          }
        }
      }
  }

  console.log(newData);

  database.UserReport.findOneAndUpdate(query, newData, {
    upsert: true
  }, function (err, doc) {
    if (err) return res.send(500, {
      error: err
    });
    return res.send("succesfully saved");
  });



})

// delete an existing note with the given object id
  app.post('/api/UserReport/delete/:id', (req,res) => {
    Note.findByIdAndRemove(req.params.id, (err) => {
      if (err) return res.status(404).send({message: err.message});
      return res.send({ message: 'note deleted!' });
    });
  });

// create excel sheet from JSON objects in Database

app.get('/api/spreadsheet', (req, res) => {
  database.UserReport.find({}).sort({
    updatedAt: 'descending'
  }).exec((err, UserReports) => {
    if (err) return res.status(404).send('Error while getting UserReports!');
    console.log(UserReports[0]);
    // var newSheet = xlsx.utils.aoa_to_sheet(UserReports);
    // xlsx.writeFile(newSheet, 'out.xlsx')
    return res.send('newSheet');
  });

})

app.get('/test', function (req, res) {
  database.UserReport.find(function (err, UserReports) {
    if (err) return res.error(err);
    res.json(UserReports);
  })
})


app.listen(3000, () => console.log('Server Running...'))