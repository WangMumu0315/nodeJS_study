const http = require('http')
const url = require('url')

const server = http.createServer((request,response) => {
    const res = url.parse(request.url,true)
    console.log(res);
    console.log(res.pathname);
    console.log(res.query.nae);
    console.log(res.query.sd);
    response.end('url')
})

server.listen(9000,() => {
    console.log("服务器启动成功....");
})