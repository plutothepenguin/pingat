var express = require('express')
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var messages = [];

app.get('/', function(req, res) {
  res.render('home.ejs', {messages: messages});
})
app.listen(process.env.PORT || 3000, function() {
  console.log('started');
})
