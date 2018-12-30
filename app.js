var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./models/menu.js').Item;
var Deal= require('./models/deal.js').Deal;
var CoinList= require('./models/coin.js').CoinList;
var CurrencyList= require('./models/currencies.js').CurrencyList;
var GlobalData= require('./models/global.js').GlobalData;
var Language = require('./models/languages.js').Language;
var passport = require('passport');
var request = require("request");
var redis = require('redis');
var helper = require('./helpers/helper.js');
const next = require('next');
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config

// Create Redis Client that can be used globally 
global.client = redis.createClient();
client.on('error', function(err){
  console.log('Something went wrong ', err)
});

mongoose.connect('mongodb://localhost/admin', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection activated...');
});

require('./config/passport');

var routesApi = require('./routes/index');
// var app = express();


nextApp.prepare().then(() => {
    const app = express()
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	app.use(bodyParser.json({type: 'application/json'}));
	app.use('/', routesApi);
  
    app.get('*', (req,res) => {
        return handle(req,res) // for all the react stuff
       });
    
	var port = 5000; 

	app.listen(port,function(err) {
		console.log('Running server on port '+ port);
	});
})




// BACKEND PROCESS NEEEDED
// var setCoinList  = function() {
// 	request('https://api.coinmarketcap.com/v1/ticker/?limit=0', function (error, response, body) {
// 	var coinlist1 = new CoinList({ _id:'1' ,coinList: body});
// 	CoinList.count({}, function(err, count){
// 		if(count==0){
// 			coinlist1.save(function(err,coinlist) {
// 			console.log('Coin List has been saved');
// 			});
// 		}
// 		else if(count==1 && body != null){
// 			helper.addCoinListToReddis(JSON.stringify(body));
// 			CoinList.update({ _id: '1' }, { $set: { coinList: body }}).exec();
// 			console.log('Coin List has been updated');

// 		}
// 	});
// });
// };

// // Set Currency List 
// var setCurrencyList  = function() {
// 	// Currencies to show
// 	var currencyparams = 'CAD,AUD,BGN,BRL,CHF,CNY,CZK,DKK,GBP,HRK,HKD,HUF,IDR,ILS,INR,JPY,KRW,MXN,MYR,NOK,NZD,PHP,PLN,RON,RUB,SEK,SGD,THB,TRY,ZAR,EUR'

// 	request('http://data.fixer.io/api/latest?access_key=7570ce4d97b1166c5fb5e423d9e3dd1c&format=1&symbols='+currencyparams, function (error, response, body) {
// 	var currencyList= new CurrencyList({ _id:'1' ,currencyList: body});
// 	CurrencyList.count({}, function(err, count){
// 		if(count==0){
// 			currencyList.save(function(err,currencyList) {
// 			console.log('Currency List has been saved' );
// 			});
// 		}
// 		else if(count==1 && body != null){
// 			CurrencyList.update({ _id: '1' }, { $set: { currenctList: body }}).exec();
// 			console.log('Currency List has been updated' );
// 		}

// 	});
// });
// };


// Set Global Data

// var setGlobalData  = function() {
// 	request('https://api.coinmarketcap.com/v2/global/', function (error, response, body) {
// 	var globaldata1 = new GlobalData({ _id:'1' ,globalData: body});
// 	GlobalData.count({}, function(err, count){
// 		if(count==0){
// 			globaldata1.save(function(err,globaldata) {
// 			console.log('Global data has been saved');
// 			});
// 		}
// 		else if(count==1 && body != null){
// 			helper.addGlobalDataToReddis(JSON.stringify(body));
// 			GlobalData.update({ _id: '1' }, { $set: { globalData: body }}).exec();
// 			console.log('Global Data has been updated');

// 		}
// 	});
// });
// };

// var setLanguages= function (languages){	
// 	languages.map(function(n){
// 	var language = new Language({symbol: n});
// 	language.save(function(err,language) {
// 		console.log('language has been saved'+ language);
// 		});
// 	});
// };

// // Initialize currency list and coin list
// setCoinList();
// setCurrencyList();
// setGlobalData();

// //create languages english urdu and french for the app
// setLanguages(['en','ur','fr']);

// setInterval(setCoinList,240000);
// setInterval(setCurrencyList,18000000);
// setInterval(setGlobalData,86400000);


