const fs = require('fs')

fs.stat('./资源/1.mp4',(err,data) => {
    if(err){
        console.log("操作失败");
        return
    }
    console.log("操作成功",data);
    console.log("\n",data.isFile());
    console.log("\n",data.isDirectory());
})