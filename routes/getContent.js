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

function getDetial(e) {
    const parames = e.toLowerCase().split(' ').join('-');
    return new Promise((resolve, reject) => {
      console.log(`https://www.scientificamerican.com/podcast/episode/${parames}`);
      request(`https://www.scientificamerican.com/podcast/episode/${parames}`, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          $ = cheerio.load(body);
          // console.log(body);
          let items = [];
          let big =  $('.transcript__inner').html();

          big.split('</p>')

          console.log(big)

          resolve(big)
        } else {
          reject(error)
        }
      })
  })
}


module.exports = {getContent, getDetial}; 