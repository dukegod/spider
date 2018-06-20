/**
 * 登录逻辑
 */ 

const request = require('request');

function loginDB(callback) {
  const options = {
    // url: 'https://www.douban.com/service/auth2/token',
    url: 'https://accounts.douban.com/j/popup/login/basic',
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Accept-Language': 'zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4',
      Connection: 'keep-alive',
      'Content-Type': 'application/x-www-form-urlencoded',
      Referer: 'https://douban.fm',
      Host: 'douban.fm',
      'User-Agent': ''
    },
    // auth: {
    //   'user': '841530656@qq.com',
    //   'pass': 'ahxx123456',
    //   'sendImmediately': false
    // },
    body: JSON.stringify({
      username: '841530656@qq.com',
      password: 'ahxx123456',
      source: 'fm',
      apikey: '02646d3fb69a52ff072d47bf23cef8fd',
      client_id: '02646d3fb69a52ff072d47bf23cef8fd',
      client_secret: 'cde5d61429abcd7c',
      udid: 'b88146214e19b8a8244c9bc0e2789da68955234d',
      douban_udid: 'b635779c65b816b13b330b68921c0f8edc049590',
      device_id: 'b88146214e19b8a8244c9bc0e2789da68955234d',
      grant_type: 'password',
      redirect_uri: 'http://www.douban.com/mobile/fm'
    })
  };

  request(options, function(error, response, body) {
    // console.log(error)
    // console.log(response)
    console.log(body)
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info)
    }
  });
};


// loginDB()

module.exports = loginDB;