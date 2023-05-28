var server = require("F:/tu/nodeJS_study/s01/server01");
var router = require("F:/tu/nodeJS_study/s01/router");
var requestHandlers = require("F:/tu/nodeJS_study/s01/requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);