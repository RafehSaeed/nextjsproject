(function(){

var redis = require('redis');

// Adds Coins List to Reddis Database
function addCoinListToReddis(body){
	client.set('coinlist', body, redis.print);	
}

// Add Global Data to Reddis

function addGlobalDataToReddis(body){
	client.set('globaldata', body, redis.print);	
}

// Gets the connection url need to connect to the database
function getDbConfig(config){
	var conn =  "postgres://"
	+	config.db_username
	+	":"
	+	config.db_password
	+	"@" 
	+ 	config.db_server 
	+	":"
	+ 	config.db_port
	+ 	"/"
	+	config.db_name;
	console.log(conn)
	return conn
}

exports.addCoinListToReddis = addCoinListToReddis;
exports.addGlobalDataToReddis = addGlobalDataToReddis;
exports.getDbConfig = getDbConfig;
}());