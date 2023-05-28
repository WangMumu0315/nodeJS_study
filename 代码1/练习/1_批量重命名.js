const fs = require('fs')

fs.readdir('./code',(err,data) => {
    if(err){
        console.log("读取文件夹失败");
        return
    }
    // console.log("读取文件夹成功",data);
    data.forEach(item => {
        let [num,name] = item.split('_')
        if(Number(num) < 10){
            num = "0" + num
            // console.log(num);
        }
        let newName = num + "_" + name
        fs.rename(`./code/${item}`,`./code/${newName}`,err => {
            if(err){
                console.log("更改名字失败");
                return
            }
            console.log("更改名字成功，请查看code下的文件名");
        })
    })
})