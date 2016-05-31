var express = require('express');
var router = express.Router();
var eventproxy = require('eventproxy');
var url = require('url');

/* GET users listing. */
router.get('/eventproxy', function(req, res, next) {
	var cnodeUrl = 'https://cnodejs.org/';
	request.get(cnodeUrl)
  .end(function (err, res) {
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
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
    console.log(topicUrls);
  });




  res.send('respond with a resource');
});

module.exports = router;

