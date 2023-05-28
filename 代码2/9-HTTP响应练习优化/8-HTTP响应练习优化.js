const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    let {pathname} = new URL(request.url,'http://127.0.0.1')
    if(pathname === '/'){
        let file = fs.readFileSync(__dirname + '/8.html')
        response.end(file)
    }else if(pathname === '/index.css'){
        let file = fs.readFileSync(__dirname + '/index.css')
        response.end(file)
    }else if(pathname === '/index.js'){
        let file = fs.readFileSync(__dirname + '/index.js')
        response.end(file)
    }
    
})

server.listen(9000, () => {
    console.log("服务器启动成功......");
})