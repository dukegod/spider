/**
 * 2018年06月17日16:28:50
 * 统一输出路由信息
 */ 

const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('index', { title: 'Spider Pro' });
})

// 添加Linux 页面的逻辑
router.use(require('./linux-commands/router'))

module.exports = router;

// var request = require('request');
// var cheerio = require('cheerio');


// var { getContent, getDetial } = require('./getContent')
// var redHeartdb = require('./get_red_heart_doubanFM')

// // 引入linux 页面




// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Spider Pro' });
// });

// router.get('/title', function (req, res) {
//   getContent().then(re => {
//     console.log(re);
//     res.render('content', {list: re})
//   })
// });

// router.get('/detail/:title', function (req, res) {
//   console.log(req.params.title);
//   getDetial(req.params.title).then(re => {
//     console.log(re);
//     res.send(re)
//     // res.render('detail', {content: re})
//   })
// });

// // 获取红星列表

// router.get('/dbfm', function (req, res) {
//   console.log(req.params);
//   redHeartdb(function (e) {
//     console.log(e);
//     res.send(e)
//   })
//   // res.send('ok')
// });




