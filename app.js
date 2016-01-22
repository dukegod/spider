var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

app.get('/', function (req, res) {
  request('http://www.qshealthcare.com/', function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);
      var p = $('p.qs-identity').text();

      var section = $('section');

      console.log(p);
      console.log(section.html()); 
      res.send(p);
      res.send(section);
    }
  })
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at', host, port);
});