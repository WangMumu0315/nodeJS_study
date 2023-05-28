const fs = require('fs')

// fs.readFile('./笨蛋文本0号.txt',(err,data) => {
//     if(err) {
//         console.log("文件读取失败");
//         return
//     }
//     console.log(data.toString());
// })

const data = fs.readFileSync('./笨蛋文本0号.txt')

console.log(data.toString());
