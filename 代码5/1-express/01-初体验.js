const express = require('express')

const app = express()

app.get('/home',(req,res) => {
    console.log(req.url);
    res.end('Hello,Get')
})

app.listen(3000,() => {
    console.log("服务器启动成功");
})