// 爬去页面的内容到本地
const request = require('request');
const cheerio = require('cheerio');

const outContent = require('./req-logic');

async function getContent() {
  return await outContent({
    page: 1,
    pageSize: 1
  })
}


module.exports = { 
  linuxCommand: getContent 
}