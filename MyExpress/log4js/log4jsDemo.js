var http=require('http');
var log4js=require('log4js');
var logger=log4js.getLogger();
http.createServer(function(req,res){
	logger.debug('Debugg Message');	
	res.end('Hello');
}).listen(1341);