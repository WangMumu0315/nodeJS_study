const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login',(req,res) => {
    res.sendFile(__dirname + '/表单.html')
})

app.post('/login',urlencodedParser,(req,res) => {
    // console.log(req.body);
    let {username,password} = req.body
    res.send('username = ' + username + " password = " + password)
})

app.listen('3000',() => {
    console.log("服务器启动成功....");
})