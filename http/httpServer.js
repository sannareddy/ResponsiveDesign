var http=require('http');
var server=http.createServer();
server.on('request',function(req,res){
	res.writeHead(200,{'Upgrade':'HTTP/1.1','Content-Type':'text/html','Connection':'keep-alive','Transfer-Encoding': 'chunked'});
	res.write("Hello ");
	setTimeout(function(){
		res.write("World");
		res.end();
	},2000);
	
});
server.listen(4000);
console.log("Server started  at:4000");