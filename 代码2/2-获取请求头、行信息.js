const http = require('http')

const server = http.createServer((req,resp) => {
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    console.log(req.headers.host);
    // console.log(req.headers);
    resp.end('hello')
})

server.listen(9000,() => {
    console.log("服务器启动成功.....");
})