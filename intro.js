var http=require('http');
var log=require('./log.js')
log.information("Server started");
http.createServer(function(request,response)
{
response.end(":)")
}).listen(8080)