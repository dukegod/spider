var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');


var { getContent, getDetial } = require('./getContent')

var redHeartdb = require('./get_red_heart_doubanFM')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spider Pro' });
});

router.get('/title', function (req, res) {
  getContent().then(re => {
    console.log(re);
    res.render('content', {list: re})
  })
});

router.get('/detail/:title', function (req, res) {
  console.log(req.params.title);
  getDetial(req.params.title).then(re => {
    console.log(re);
    res.send(re)
    // res.render('detail', {content: re})
  })
});

// 获取红星列表

router.get('/dbfm', function (req, res) {
  console.log(req.params);
  redHeartdb(function (e) {
    console.log(e);
    res.send(e)
  })
  // res.send('ok')
});

module.exports = router;
