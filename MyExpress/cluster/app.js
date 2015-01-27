var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
console.log('Started');
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
}else{
	var app=require('express')(http);
	app.get('/',function(req,res){
		res.send('Hello World!');	
	});
	app.listen(1341);
	console.log('worker ' + cluster.worker.id + ' Running');
}
