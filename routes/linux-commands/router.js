/**
 * 2018年06月17日16:08:28 by 刘辉
 * 处理路由跳转逻辑
 */ 


const express = require('express');
const router = express.Router();
const getContent  = require('./linux-commands');


router.get('/linux', (req, res) => {


  let itemTitle = {
    title: '文件和目录管理',
    titleId: 1,
    pageSize: 3,
    content: []
  }



  getContent(itemTitle).then((re)=>{
    console.log(re)

    re.forEach((val) =>{
      itemTitle.content.push(...val);
    })

    // localStorage.setItem('filesDirs', itemTitle)
    res.send(result);
  })
  
})

router.get('/linux2', (req, res) => {
  res.send('ok222');
})


module.exports = router;