const http = require('http')

const server = http.createServer((request,response) => {
    // response.statusCode = 203
    // response.statusMessage = "wawawawa"
    // response.setHeader('content-type',"text/html;charset=utf-8")
    response.setHeader('Wa',"HA")
    response.end('response')
})

server.listen(9000,() => {
    console.log("服务器启动成功了.......");
})