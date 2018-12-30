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

exports.addCoinListToReddis = addCoinListToReddis;
exports.addGlobalDataToReddis = addGlobalDataToReddis;
}());