var app = require('express')();

app.get('/', function(req, res) {
  res.send('home page');
})
app.listen(process.env.PORT || 3000, function() {
  console.log('started');
})
