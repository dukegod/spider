
const request = require('request');
const cheerio = require('cheerio');

function getContent() {
  return new Promise((resolve, reject) => {
    request('http://man.linuxde.net/par/1/page/1', (error, response, body) => {
      if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
        // console.log(body);
        let items = [];

        Array.from($('#arcs-list li')).forEach( element => { 
                    
          items.push({
            title: $(element).find('a').attr('title'),
            description: $(element).find('p').html(),
            href: $(element).find('a').attr('href'),
          })
        })

        // console.log(items)
        resolve(items)
      } else {
        reject(error)
      }
    })
  })
}

module.exports = { 
  linuxCommand: getContent 
}