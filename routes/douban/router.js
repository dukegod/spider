
const express = require('express');
const router = express.Router();
const redHeartdb = require('./get_red_heart_doubanFM')

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