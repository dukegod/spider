/**
 * Created by hui on 16/01/2018.
 * 获取豆瓣FM的列表
 */
var request = require("request")

module.exports = function (callback) {
  const options = {
      url: 'https://www.douban.com/service/auth2/token',
      method: 'POST',
      headers: {
        Accept: "*/*",
        'Accept-Language': "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
        Connection: "keep-alive",
        'Content-Type': "application/x-www-form-urlencoded",
        Referer:"https://douban.fm",
        Host:"douban.fm",
        'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/65.0.3321.0 Safari/537.36"
      },
      body: JSON.stringify({
        username: '841530656@qq.com',
        password: 'ahxx123456',
        apikey: '02646d3fb69a52ff072d47bf23cef8fd',

        'client_id': '02646d3fb69a52ff072d47bf23cef8fd',

        'client_secret': 'cde5d61429abcd7c',

        udid: 'b88146214e19b8a8244c9bc0e2789da68955234d',

        'douban_udid': 'b635779c65b816b13b330b68921c0f8edc049590',

        'device_id': 'b88146214e19b8a8244c9bc0e2789da68955234d',

        'grant_type': 'password',

        'redirect_uri': 'http://www.douban.com/mobile/fm'
      }),
  }


  // request(options, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var info = JSON.parse(body);
  //     console.log(info + " Stars");
  //     callback(body);
  //   }
  // });

  request({
    url: 'https://douban.fm/j/v2/artist/guess?limit=10&is_new_user=true',
    method: 'GET',
  }, function (error, response, body) {
    console.log(error)
    console.log(response)
    console.log(body)
    callback(body)
  })




  // setTimeout(function () {
  //   callback('90')
  // }, 5000)
}




