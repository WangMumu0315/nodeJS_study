const http = require('http')

const server = http.createServer((request,response) => {
    const url = new URL(request.url,'http://127.0.0.1')
    console.log(url);
    console.log(url.pathname);
    console.log(url.searchParams.get('nae'));
    console.log(url.searchParams.get('sd'));
    response.end('url')
})

server.listen(9000,() => {
    console.log("服务器启动成功....");
})