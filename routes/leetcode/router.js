
const express = require('express');
const router = express.Router();
const resortContent = require('./content')

router.get('/leetcode', function (req, res) {
  resortContent().then((result) => {
    res.render('leetcode', {
      title: 'leetcode',
      content: result
    })
  }).catch((err) => {
    res.send('not work')
  });
});

module.exports = router;