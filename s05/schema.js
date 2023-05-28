const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 1、连接数据库
// 指定连接的数据库不需要已经存在，会在插入第一条数据之后自动被创建
// 连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1/test1', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

// 2、设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据

let useSchema = new Schema({
  username: {
    type: String,
    require: true 
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: false
  }
})

// 3、将文档架构发布为模型
// mongoose.model方法就是用来将一个架构发布于model的
// 第一个参数： 传入一个大写名词单数字符串用来表示你的数据库名称
//              mongoose会自动将大写名称的字符串生成小写复数的集合名称
//              例如这里的User会变为users集合名称
// 第二个参数： 架构Schema
// 返回值： 模型构造函数
const User = mongoose.model('User', useSchema);

//add
const admin = new User({
  username: 'admin',
  password: '12345',
  email: '123@123.com'
})

//admin.save().then(() => console.log('保存成功'),console.log(admin));
//admin.save().then(ret =>{
	//console.log('保存成功');
	//console.log(admin);
//});

//User.find().then(ret => {
	//console.log('查询成功');
    //console.log(ret);
//});

User.find().then({username:'admin'},ret => {
	console.log('查询成功');
    console.log(ret);
});





