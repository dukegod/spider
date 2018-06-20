const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(
  'mongodb://linux:linux123456@ds161164.mlab.com:61164/linuxman'
  // 'mongodb://localhost/test'
);

const connection = mongoose.connection;
connection.then(
  () => {
    console.log('链接数据库ok');
  },
  err => {
    console.log(err);
  }
);

async function fileDir(modleTitle,params) {

  const models = params.content; 
  models.forEach((element, index) => {
    element.id = index;
  });

  //先创建Schema
  const colletionManagement = new Schema({
    id: { type: Number, default: 0 },
    title: { type: String },
    description: { type: String },
    href: { type: String },
    modifyOn: { type: Date, default: Date.now }
  });

  //通过Schema创建Model- 集合（collection）
  let model = mongoose.model(modleTitle, colletionManagement);
  // 插入数据

  return await new Promise((resolve, reject)=>{
      model.insertMany(models, (err, re) => {
    if (err) {
      console.log(err);
      reject(err)
    }
    console.log(re);
    resolve(re)
  });
  })
}

module.exports = fileDir;
