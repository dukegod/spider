var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');

var eventproxy = require('eventproxy');
var url = require('url');

// app.get('/', function (req, res) {
//   request('https://cnodejs.org/', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       $ = cheerio.load(body);
//       // console.log($);
//       var items = [];
//       $('#topic_list .topic_title').each(function (idx, element) {
//         var $element = $(element);
//         items.push({
//           title: $element.attr('title'),
//           href: $element.attr('href')
//         });
//       });
//       res.send(items);
//     }
//   })
// });

/*
*
*  整合eventproxy完成并发处理
*/
app.get('/', function (req, res) {
  var cnodeUrl = 'https://cnodejs.org/';
  request(cnodeUrl,function (err, res, body) {
    // console.log('----body',body);
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(body);
    // console.log($);
    // 获取首页所有的链接
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      // $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
      // 我们用 url.resolve 来自动推断出完整 url，变成
      // https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
      // 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });

    var ep = new eventproxy();

    ep.after('topic_html', topicUrls.length, function (topics) {
      topics = topics.map(function (topicPair) {
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];
        console.log(topicHtml);
        var $ = cheerio.load(topicHtml);
        return ({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim(),
        });
      });

      console.log('final:');
      console.log(topics);
    });

    topicUrls.forEach(function (topicUrl) {
      request
        .get(topicUrl,function(){
          console.log('fetch ' + topicUrl + ' successful');
          ep.emit('topic_html', [topicUrl, body]);
        })
    });

    console.log(topicUrls);
  });
  res.send('ok');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at', host, port);
});

module.exports = app