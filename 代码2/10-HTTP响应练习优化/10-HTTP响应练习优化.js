const http = require('http')
const fs = require('fs')

const server = http.createServer((request,response) => {
    let {pathname} = new URL(request.url,'http://127.0.0.1')
    let filePath = __dirname + '/pages' + pathname

    fs.readFile(filePath,(err,data) => {
        if(err){
            console.log("读取文件失败");
            return
        }
        response.end(data)
    })
})

server.listen(9000,() => {
    console.log("服务器启动成功....");
})