var http=require('http');
var express=require('express');
var responseTime=require('response-time');
var iniparser=require('iniparser');
var app=express();
var config=iniparser.parseSync('./config.ini');
app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('./public'));
app.use(responseTime());


http.createServer(app).listen(1341,function(){
	console.log('Expresss app started');		
});

app.get('/',function(req,res){
	res.render('index',{title:config.title,message:config.message});
});



/*
app.get('/say-hello',function(req,res){
	res.render('hello');
});
app.get('/test',function(req,res){
	res.send('this is a test');
});*/
