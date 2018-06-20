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

// 添加60s
router.use(require('./60s/router'));

// 添加豆瓣
router.use(require('./douban/router'));

module.exports = router;






