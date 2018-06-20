
const express = require('express');
const router = express.Router();
const { getContent, getDetial } = require('./getContent')


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
  })
});

module.exports = router;