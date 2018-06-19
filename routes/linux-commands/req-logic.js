/**
 * 2018年06月17日16:31:13
 * hui
 */

const request = require('request');
const cheerio = require('cheerio');

const URL = 'http://man.linuxde.net/par';

function troggleRequest({ page = 1, pageSize = 1 } = {}) {
  let options = {
    url: `${URL}/${page}/page/${pageSize}`
  };
  console.log(options);
  return new Promise((resolve, reject) => {
    request(options.url, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        $ = cheerio.load(body);
        let items = [];
        Array.from($('#arcs-list li')).forEach((element, index) => {
          items.push({
            id: index,
            title: $(element)
              .find('a')
              .attr('title'),
            description: $(element)
              .find('p')
              .text(),
            href: $(element)
              .find('a')
              .attr('href')
          });
        });
        resolve(items);
      } else {
        reject(error);
      }
    });
  });
}

async function outContent({title='文件目录', titleId=1, pageSize=3}={}) {
  let promises = [];

  for(let i =1; i <= pageSize; i++) {
    promises.push(troggleRequest({page: titleId, pageSize: i}))
  }

  console.log(promises)
  return await Promise.all(promises)
}

module.exports = outContent;
