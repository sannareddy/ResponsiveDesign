var tcp=require('net');
var sockets=[];
var server=tcp.createServer();
server.on('connection',function(socket){
	sockets.push(socket);
	writeMsg('..............User '+sockets.length+' Joined In Group..............',socket);
	socket.on('data',function(data){
		console.log(data);
		writeMsg(data,this);
	});	
});
server.on('error', function(err) {
	console.log('Server error:', err.message);
});
server.on('close', function() {
	console.log('Server closed');
});
server.listen(1341);
function writeMsg(msg,owner){
	sockets.forEach(function(socket,index){
		socket.write(msg);		
	});
}
