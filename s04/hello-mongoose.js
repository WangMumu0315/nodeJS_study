//hello-mongoose.js
const mongoose = require("mongoose");
const url = "mongodb://localhost/abc";
const Schema = mongoose.Schema;

async function connect() {
  //连接数据库
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected!");
  } catch (error) {
    console.log("connection fail!");
  }
}

async function createCatModel() {
  //定义Schema
  const catSchema = new Schema({
    name: String,
    kind: { type: String, required: true },
    age: Number,
    food: [Number],
    birth: Date,
  });

  catSchema.methods.getCatName=function(){
	  return this.name;
  }
  const Cat = mongoose.model("Cat", catSchema);//根据schema生成model
  const LiHua = new Cat({ name: "LiHua"});//新建一个model的实例
  console.log(LiHua.getCatName());
}

(async () => {
  // await connect();
  await createCatModel();
  mongoose.connection.close();//建议数据库操作完成之后主动断开数据库连接，释放连接资源（非强制）
})();

