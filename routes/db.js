
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const autoIncrement = require('mongoose-auto-increment');
  const connection = mongoose.createConnection(
    'mongodb://linux:linux123456@ds161164.mlab.com:61164/linuxman'
    // 'mongodb://ndclubclub:123456@ds161426.mlab.com:61426/nodenodeclub'
  );

  // connection.then(
  //   e => {
  //     console.log('链接数据库ok');

  //   },
  //   err => {
  //     console.log(err);
  //   }
  // );


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

  // // 创建自动增加id
  // // autoIncrement.initialize(connection);

  // //先创建Schema
  // const firlDirManagement = new Schema({
  //   id: { type: Number, default: 0 },
  //   title: { type: String },
  //   description: { type: String },
  //   href: { type: String },
  //   modifyOn: { type: Date, default: Date.now }
  // })

  // // firlDirManagement.plugin(autoIncrement.plugin, 'FDManaColl');

  // //通过Schema创建Model- 集合（collection）
  // let FDManaColl = mongoose.model('FDManaColl', firlDirManagement);

  // // 往 集合中添加数据-
  // const FDManaCollItem = new FDManaColl({
  //   title: 'test',
  //   description: 'ts',
  //   href: '#'
  // });

  // // FDManaCollItem.

  // FDManaCollItem.save(err => {
  //   if (err) {
  //     console.log(err);
  //   }

  //   console.log('success');
  // });

  // // FDManaColl.find(function(err, kittens) {
  // //   if (err) {
  // //     console.error(err);
  // //   } 
  // //   console.log(kittens);
  // // });
