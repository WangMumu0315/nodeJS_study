const fs = require('fs')

// fs.appendFile('./座右铭.txt','你好啊',err => {
//     if(err){
//         console.log("写入失败");
//         return
//     }
//     console.log("写入成功");
// })

// fs.appendFileSync('./座右铭.txt','\r\n哈哈哈哈')

fs.writeFile('./座右铭.txt','\n呜呜物语',{flag:'a'},err => {
    if(err){
        console.log("追加写入失败");
        return
    }
    console.log("追加写入成功");
})