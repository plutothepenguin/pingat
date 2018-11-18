var app = require('express')();

app.get('/', function(req, res) {
  res.send('home page');
})
app.listen(5000, function() {
  console.log('started');
})
