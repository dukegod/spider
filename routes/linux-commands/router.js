/**
 * 2018年06月17日16:08:28 by 刘辉
 * 处理路由跳转逻辑
 */ 


const express = require('express');
const router = express.Router();

const { linuxCommand } = require('./linux-commands');// 获取linux命令

// router.get('/linux', (req, res)=>{
//   linuxCommand().then(re =>{
//     res.send(re)
//   }).catch(err => {
//     res.send('err')
//   })
// })


router.get('/linux', (req, res) => {
  linuxCommand.then((re)=>{
    console.log(re)
  })
  res.send('ok');
})

router.get('/linux2', (req, res) => {
  res.send('ok222');
})


module.exports = router;