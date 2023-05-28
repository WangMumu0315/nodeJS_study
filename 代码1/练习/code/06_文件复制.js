const fs = require('fs')

// let data = fs.readFileSync('./资源/1.mp4')

// fs.writeFileSync('./资源/2.mp4',data)

let rs = fs.createReadStream('./资源/1.mp4')

let ws = fs.createWriteStream('./资源/3.mp4')

//'data'事件
rs.on('data',chunk => {
    ws.write(chunk)
})