const express = require('express');
var path  = require('path');
var bodyParser = require('body-parser');

var app = express();

// configure bodyParser
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// views with jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// routes
app.get('/', (req, res) => res.render('index'));

app.post('/charge', (req, res) =>{
  const keys = require('./keys.json');
  const conekta = require('conekta');
  conekta.api_key = keys.private;

  console.log(req.body);
  /*conekta.Charge.create(req.body, (err, charge) => {
    if (err) {
      return res.render('charge', {
        charge: res
      });
    }
    return res.render('charge', {
      charge: charge.toObject()
    })
  });*/
});

app.listen(4000);

module.exports = app;
