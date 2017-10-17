var request = require('request');
var cheerio = require('cheerio');

function getContent() {
  return new Promise((resolve, reject) => {
    request('https://www.scientificamerican.com/podcast/60-second-science/', (error, response, body) => {
      if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
        // console.log(body);
        let items = [];

        const big =  $('.t_feature-title a');

        items.push({
          title: big.html(),
          href: big.attr('href')
        })
        resolve(items)
      } else {
        reject(error)
      }
    })
  })
}

function getDetial() {
    return new Promise((resolve, reject) => {
    request('https://www.scientificamerican.com/podcast/episode/', (error, response, body) => {
      if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
        // console.log(body);
        let items = [];
        const big =  $('.transcript__inner');

        resolve(big)
      } else {
        reject(error)
      }
    })
  })
}


module.exports = {getContent, getDetial}; 