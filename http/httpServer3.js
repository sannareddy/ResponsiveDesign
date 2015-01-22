var http=require('http');
var url=require('url');
var path=require('path');
var fs=require('fs');
var server=http.createServer(function(request,response){
	var requestUrl=url.parse(request.url);

	var mimeTypes = {
		"html": "text/html",
		"jpeg": "image/jpeg",
		"jpg": "image/jpeg",
		"png": "image/png",
		"js": "text/javascript",
		"css": "text/css"
	};

	var filePath=path.join("WebApp",requestUrl.pathname);
	var isExists=fs.existsSync(filePath);		
	var mimeType = mimeTypes[path.extname(filePath).split(".")[1]];
	if(isExists){
		fs.stat(filePath,function(err,stat){
			if(stat.isFile()){
				response.writeHead(200,{'content-type':mimeType});
				var content = fs.createReadStream(filePath);
				content.pipe(response);			
			}else{
				response.writeHead(500,{'content-type':'text/html'});
				response.end("<html><body><div style='color:red'>Complete Path required</div></body></html>");
			}
		});		
	}else{
		console.log("nexists");
		response.writeHead(404,{'content-type':'text/html'});
		response.end("<html><body><div style='color:red'>Page Not Found</div></body></html>");
	}					
	
	response.end();
	return;
});
server.listen(4001);