var fs=require('fs');
//var buffer=require('buffer');
fs.open('./Sample.txt','a+',function(err,fd){
	if(err)throw err;
	var content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"+
				 " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"+
				 " quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."+
				 " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."+
				 " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
	var buffer=new Buffer(content,"utf8");			 
	fs.write(fd,buffer,0,buffer.length,0,function(err,numberOfBytesWritten){
			if(err) throw err;
			console.log(numberOfBytesWritten+" bytes written into the file");
			fs.close(fd,function(){
				console.log("File Writing is completed");
			});
	});				
});