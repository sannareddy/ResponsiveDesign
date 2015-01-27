var app = require('express')();
var http = require('http').createServer(app);
var io=require('socket.io')(http);
io.on('connection', function(socket){
  console.log('Connection logged');		
  socket.on('message', function(msg){
	console.log(msg);  
	socket.broadcast.emit('message', msg);
  });
  socket.on('disconnect',function(){
	console.log('disconneceted');		
  });
});

app.get('/', function(req, res){
   res.sendFile(__dirname + '/ChatClient.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});