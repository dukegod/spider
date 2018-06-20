/**
 * 2018年06月17日16:08:28 by 刘辉
 * 处理路由跳转逻辑
 */ 


const express = require('express');
const router = express.Router();
const getContent  = require('./linux-commands');
const db = require('./db')

router.get('/linuxpage', (req, res)=>{
  res.render('linux', { title: '抓取lihux命令' });
})

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
    return itemTitle;
  }, (err)=>{
    return err
  }).then(re => {
    db('lxfilesDirs', re).then(result=>{
      console.log(result)
      res.send(result);
    })
  })
})

router.get('/linux2', (req, res) => {
  let itemTitle = {
    title: '系统管理',
    titleId: 2,
    pageSize: 3,
    content: []
  }
  getContent(itemTitle).then((re)=>{
    console.log(re)

    re.forEach((val) =>{
      itemTitle.content.push(...val);
    })
    return itemTitle;
  }, (err)=>{
    return err
  }).then(re => {
    db('lxsystemMan', re).then(result=>{
      console.log(result)
      res.send(result);
    })
  })
})

router.get('/linux3', (req, res) => {
  let itemTitle = {
    title: '硬件·内核·Shell·监测',
    titleId: 3,
    pageSize: 3,
    content: []
  }
  getContent(itemTitle).then((re)=>{
    console.log(re)
    re.forEach((val) =>{
      itemTitle.content.push(...val);
    })
    return itemTitle;
  }, (err)=>{
    return err
  }).then(re => {
    db('lxcoreMonitor', re).then(result=>{
      console.log(result)
      res.send(result);
    })
  })
})

router.get('/linux4', (req, res) => {
  let itemTitle = {
    title: '软件·打印·开发·工具',
    titleId: 3,
    pageSize: 3,
    content: []
  }
  getContent(itemTitle).then((re)=>{
    console.log(re)
    re.forEach((val) =>{
      itemTitle.content.push(...val);
    })
    return itemTitle;
  }, (err)=>{
    return err
  }).then(re => {
    db('lxtools', re).then(result=>{
      console.log(result)
      res.send(result);
    })
  })
})

router.get('/linux5', (req, res) => {
  let itemTitle = {
    title: '网络管理',
    titleId: 3,
    pageSize: 3,
    content: []
  }
  getContent(itemTitle).then((re)=>{
    console.log(re)
    re.forEach((val) =>{
      itemTitle.content.push(...val);
    })
    return itemTitle;
  }, (err)=>{
    return err
  }).then(re => {
    db('lxnetworkMan', re).then(result=>{
      console.log(result)
      res.send(result);
    })
  })
})

module.exports = router;