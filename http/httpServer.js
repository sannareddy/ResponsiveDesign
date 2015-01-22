var http=require('http');
var server=http.createServer();
server.on('request',function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write("Hello ");
	setTimeout(function(){
		response.write("World");
		response.end();
	},2000);
});
server.listen(4000);
console.log("Server started  at:4000");