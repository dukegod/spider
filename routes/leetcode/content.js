const request = require('request');
const cheerio = require('cheerio');

const getContent = function (params) { 
  return new Promise((resolve, reject)=>{
    request({
      url: params,
    }, (err, response, body)=>{
      if (err) reject(err)
      if (!err && response.statusCode == 200) {
        // $ = cheerio.load(body);
        // console.log(body);
        resolve(body)
      } else {
        reject(error)
      }
    })
  })
}

async function resortContent() {
  const zhcode = await getContent('https://leetcode-cn.com/api/problems/all/')

  const result = JSON.parse(zhcode).stat_status_pairs;
  const array = [];
    result.map((val)=>{
      console.log(val.stat);
      array.push({
        id: val.stat.question_id,
        title: val.stat.question__title,
        titleSlug: val.stat.question__title_slug,
        difficultyLevel: val.difficulty.level,
      })
    })
    array.sort((a, b)=>{
      return a.id - b.id
    })
    return array;
}
module.exports = resortContent;