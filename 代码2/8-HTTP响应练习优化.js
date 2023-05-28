const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    let file = fs.readFileSync(__dirname + '/8.html')
    response.end(file)
})

server.listen(9000, () => {
    console.log("服务器启动成功......");
})