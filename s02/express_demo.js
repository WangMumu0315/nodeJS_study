var express = require('express');
var app = express();

app.get('/',function(request,response){
	response.send('Hello World');
})

var server = app.listen(9999,function(){
	
	var host = server.address().address;
	var post = server.address().post;
	
	console.log("应用实例，访问地址为 http://%s:%s",host,post);
})