const http = require('http')

const serve = http.createServer((req,resp) => {
    resp.setHeader('content-type','text/html;charset=utf-8')
    resp.end('你好')
})

serve.listen(9000,() => {
    console.log("服务器成功启动.....");
})