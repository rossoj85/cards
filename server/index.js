const express = require('express');
const volleyball = require('volleyball')
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(volleyball)

// serves up static files
app.use(express.static(path.join(__dirname,'..','public')))

//body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes
app.use('/api', require('./api')); 

 // 404 error
 app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  //error handling endware
  app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});