const fs = require('fs');
const resortContent = require('./content')

resortContent().then(re => {
  const file = fs.createWriteStream('./routes/leetcode/leetcode.json', {
    flags: 'w',
    encoding: 'utf8',
    fd: null,
    mode: 0o666,
    autoClose: true
  });
  file.write(JSON.stringify(re))
})