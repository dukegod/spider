/**
 * Created by hui on 16/01/2018.
 * 获取豆瓣FM的列表
 */
const request = require('request');

const loginDB = require('./login')

const API_HOST = 'http://www.douban.com';

const CHANNELS_URL = API_HOST + '/j/app/radio/channels';

const AUTH_URL = API_HOST + '/j/app/login';

const PLAYLIST_URL = API_HOST + '/j/app/radio/people';

const app_name = 'radio_desktop_web';

const version = 100;



// loginDB();

module.exports = function(callback) {
  // const options = {
  //   // url: 'https://www.douban.com/service/auth2/token',
  //   url: 'https://douban.fm/j/v2/redheart/basic',
  //   method: 'get',
  //   headers: {
  //     Accept: '*/*',
  //     'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
  //     Connection: 'keep-alive',
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     Referer: 'https://douban.fm',
  //     Host: 'douban.fm',
  //     'User-Agent':
  //       'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/65.0.3321.0 Safari/537.36'
  //   },
  //   body: JSON.stringify({
  //   })
  // };

  request.post(AUTH_URL).auth()

  // request({
  //   url: 'https://douban.fm/j/v2/artist/guess?limit=10&is_new_user=true',
  //   method: 'GET',
  // }, function (error, response, body) {
  //   console.log(error)
  //   console.log(response)
  //   console.log(body)
  //   callback(body)
  // })
};
