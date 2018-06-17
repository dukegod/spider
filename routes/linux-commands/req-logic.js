/**
 * 2018年06月17日16:31:13
 * hui   
 */ 

const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://man.linuxde.net/par';


function troggleRequest({page:1, pageSize:1} = {}) {

  let options = {
    url: `${URL}/${page}/page/${pageSize}`
  }

  return new Promise((resolve, reject) => {
    request(options.url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
        let items = [];
        Array.from($('#arcs-list li')).forEach( (element, index) => { 
          items.push({
            id: index,
            title: $(element).find('a').attr('title'),
            description: $(element).find('p').html(),
            href: $(element).find('a').attr('href'),
          })
        })
        resolve(items)
      } else {
        reject(error)
      }
    })
  })
}


async function outContent(opts) {
  return await troggleRequest(opts)
}

module.exports = outContent;