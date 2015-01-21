var stream=require('stream');
var MyReadable=function(options){
	stream.Readable.call(this,options);
	this.data=["one","two","three","four"];
}	
MyReadable.prototype=Object.create(stream.Readable.prototype);
MyReadable.prototype._read=function(){
	if(this.data.length){
		return this.push(this.data.pop());
	}else{
		return this.push(null);
	}		
}

var readStr=new MyReadable({objectMode : true});
readStr.on('data',function(data){
	console.log(data.toString());
});
readStr.on('end',function(){
	console.log('Closed');
});

var readStr2=new MyReadable({objectMode : true});
readStr2.on('data',function(data){
	console.log(data.toString());
});
readStr2.on('end',function(){
	console.log('Closed');
});