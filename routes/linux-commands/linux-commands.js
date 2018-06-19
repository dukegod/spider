// 爬去页面的内容到本地
const request = require('request');
const cheerio = require('cheerio');

const outContent = require('./req-logic');

async function getContent(opts) {
  return await outContent(opts);
}


module.exports = getContent