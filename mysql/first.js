var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	user:'node',
	password:'node'//,
	//database:'employee'
}); 
connection.query('USE employee',function(err){
	if(err){
		console.log(err);
		connection.end();
		process.exit(0);
	}
});


connection.query("UPDATE `employee`.`emp` SET `EmpSal` = 100000 WHERE `EmpID` = 1",function(err,result){
	if(err) throw err;
	console.log("\n"+result.affectedRows+" row(s) updated");
});

connection.query("DELETE FROM `employee`.`emp` WHERE `EmpName` = ?",['HTC'],function(err,result){
	if(err) throw err;
	console.log("\n"+result.affectedRows+" row(s) deleted");
});

connection.query("INSERT INTO `employee`.`emp`(`EmpName`,`EmpSal`)VALUES('HTC',15000)",function(err,result){
	if(err) throw err;
	console.log("\n"+result.affectedRows+" row(s) inserted, and the id is "+result.insertId);
});


connection.query("SELECT EmpID,EmpName,EmpSal FROM Emp",function(err,rows,fields){
	if(err) throw err;
	var fieldValue="";
	console.log("");
	fields.forEach(function(field,index){
		process.stdout.write(field.name+new Array(40-field.name.length).join(' '));
	});
	console.log("");
	console.log("");
	rows.forEach(function(row,index){
		fields.forEach(function(field,index){
			fieldValue=row[field.name]+"";
			process.stdout.write(fieldValue+new Array(40-fieldValue.length).join(' '));
		});	
		console.log("");
	});
});


var query=connection.query("SELECT EmpID,EmpName,EmpSal FROM Emp");
var fieldNames=[];
query.on('error',function(err){
	console.log(err.stack);
});
this.fields="";
query.on('fields',function(fields){
	console.log("");
	this.fields=fields;
	fields.forEach(function(field,index){
		process.stdout.write(field.name+new Array(40-field.name.length).join(' '));
	});	
	console.log("");
});
var fieldValue="";
query.on('result',function(row){
	console.log("");
	this.fields.forEach(function(field,index){
			fieldValue=row[field.name]+"";
			process.stdout.write(fieldValue+new Array(40-fieldValue.length).join(' '));
	});		
});
query.on('end',function(err){
	console.log('\nClosed');
})

connection.end();