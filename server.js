var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 
  'contact.html'));
});
app.get('/ui/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/ui/portfolio.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 
  'portfolio.html'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
