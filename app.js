var express = require('express');

var app = express();

app.use(express.static('./'));

app.get('/', function(request, response) {
  response.send('OK request');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Running API on localhost:' + port);
});
