
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const connection = mongoose.connect(
    'mongodb://linux:linux123456@ds161164.mlab.com:61164/linuxman'
    // 'mongodb://localhost/test'
  );

  connection.then(
    () => {
      console.log('链接数据库ok');
  
    },
    err => {
      console.log(err);
    }
  );

  function getNextSequenceValue(collections) {
    collections.find((err, data)=>{
      if (err) {
        console.log(err);
      }
      console.log(data.length);
      return data.length;
    })
  }

  //先创建Schema
  const firlDirManagement = new Schema({
    id: { type: Number, default: 0 },
    title: { type: String },
    description: { type: String },
    href: { type: String },
    modifyOn: { type: Date, default: Date.now }
  });

  // firlDirManagement.plugin(autoIncrement.plugin, 'FDManaColl');

  //通过Schema创建Model- 集合（collection）
  let FDManaColl = mongoose.model('FDManaColl', firlDirManagement);


  // 往 集合中添加数据-
  let FDManaCollItem = new FDManaColl({
    id: getNextSequenceValue(FDManaColl),
    title: '111',
    description: 'ts',
    href: '#'
  });
  //
  // // FDManaCollItem.
  FDManaCollItem.save((err, re) => {
    if (err) {
      console.log(err);
    }

    console.log(re);
  });

  // FDManaColl.find(function(err, kittens) {
  //   if (err) {
  //     console.error(err);
  //   }
  //   console.log(kittens);
  // });
