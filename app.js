var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Item = require('./models/menu.js').Item;
var GlobalData= require('./models/global.js').GlobalData;
var Language = require('./models/languages.js').Language;
var passport = require('passport');
var request = require("request");
var redis = require('redis');
var helper = require('./helpers/helper.js');
var next = require('next');
var mobxReact = require('mobx-react');
var dev = process.env.NODE_DEV !== 'production' //true false
var Category = require('./models/servicecategory.js').Category;
var db = require('./db/db.js');
sequelize = db.getConnection();
mobxReact.useStaticRendering(true);

global.nextApp = next({ dev })
var handle = nextApp.getRequestHandler() //part of next config

// Create Redis Client that can be used globally
global.client = redis.createClient();
client.on('error', function(err){
  console.log('Something went wrong ', err)
});



// mongoose.connect('mongodb://localhost/admin', {
//   keepAlive: true,
//   reconnectTries: Number.MAX_VALUE,
//   useMongoClient: true
// });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Database connection activated...');
// });



nextApp.prepare().then(() => {

	require('./config/passport');

	var routesApi = require('./routes/index');
// var app = express();

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




// Load data move to own folder later

// var  createCategories = () => {

// 	let categories =  [
// 			{category_id: 'auto_repair' , categoryName: 'Auto Repair'}
// 		,	{category_id: 'auto_main_care' , categoryName: 'Auto Maintainence and Care' }
// 		,	{category_id: 'bridal_services' , categoryName: 'Bridal Services' }
// 		,	{category_id: 'healths' , categoryName: 'Healths' }
// 		,	{category_id: 'makeup_services' , categoryName: 'Make-up Services' }
// 		,	{category_id: 'home_renovations' , categoryName: 'Home Renovations' }
// 		,	{category_id: 'training_fitness' , categoryName: 'Training & Fitness' }
// 		,	{category_id: 'event_planning' , categoryName: 'Event Planning & Organizing' }
// 		,	{category_id: 'auto_care' , categoryName: 'Auto Care' }
// 		,	{category_id: 'mobile_services' , categoryName: 'Cellular/Mobile Services' }
// 		,	{category_id: 'grooming' , categoryName: 'Men Grooming' }
// 		,	{category_id: 'grooming' , categoryName: 'Men Grooming' }
// 		,	{category_id: 'home_care' , categoryName: 'Home Care' }
// 		,	{category_id: 'home_repairs' , categoryName: 'Home Repairs' }
// 		,	{category_id: 'home_improvements' , categoryName: 'Home Improvements' }
// 		,	{category_id: 'painting' , categoryName: 'Painters' }
// 		,	{category_id: 'electronics' , categoryName: 'Electronics' }
// 		,	{category_id: 'makeup_artists' , categoryName: 'Make Up Artists' }
// 		,	{category_id: 'auto_detailing' , categoryName: 'Auto Detailing' }
// 	];

// 	categories.map(category => {
// 		var category = new Category(category);
// 		category.save((err,category)=> {
// 			if(err){console.log(err)}
// 			else {
// 				console.log(category.getTitle + 'has been saved ')
// 			}
// 		})
// 	});
// }

// createCategories();



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
