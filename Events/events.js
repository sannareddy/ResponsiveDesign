var events=require('events');
//var eventEmitter=new events.EventEmitter();

var MyEmitter=function(){};
MyEmitter.prototype=events.EventEmitter.prototype;
MyEmitter.prototype.hai=function(){
	this.emit('hai');
}


var eventEmitter=new MyEmitter();


eventEmitter.on('hello',function(){
	console.log('Said Hello');
});
eventEmitter.on('hai',function(){
	console.log('Said Hai');
});

eventEmitter.hai();