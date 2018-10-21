const fs = require('fs');
// console.log(__dirname);

const content = fs.createReadStream(`${__dirname}/leetcode.json`, {
  flags: 'r',
  encoding: null,
  fd: null,
  mode: 0o666,
  autoClose: true,
  start: 0,
})

content.on('readable', () => {
  console.log('readable:', content.read());
});
content.on('end', () => {
  console.log('end');
});

console.log(content);