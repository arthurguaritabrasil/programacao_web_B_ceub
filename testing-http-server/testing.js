var http = require('http');
var rt = require('./rt');

http.createServer(function (req, res) {
    for (let [key,route] of rt.routes) {
        if (req.url === route.path && req.method === rt.method){
            route.handler(req, res);
            return;
        }
    }
}).listen(8081);