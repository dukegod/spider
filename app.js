var express = require('express');
var app = express();
// 引入路由
var router = require('./routes/index')
app.use(router);
// 设置模板
app.set('view engine', 'pug');
// 加载静态资源
app.use(express.static('public'));

var server = app.listen(3000, '0.0.0.0', function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at', host, port);
});

module.exports = app
