var http=require('http');
var url=require('url');

var server=http.createServer(function(request,response){
	var requestUrl=url.parse(request.url);
	switch(requestUrl.pathname){
	case '/':
		response.writeHead(200,{'content-type':'text/html'});
		response.end("<html><body><div style='color:red'>You are at root</div></body></html>");
		break;
	case '/index.html':
	    response.writeHead(200,{'content-type':'text/html'});
		response.end("<html><body><div style='color:Green'>Index Page Found</div></body></html>");
		break;
	default:
		response.writeHead(404,{'content-type':'text/html'});
		response.end("<html><body><div style='color:red'>Page Not Found</div></body></html>");
	}
	response.end();
});
server.listen(4001);