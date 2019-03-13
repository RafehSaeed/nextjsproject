var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var mongoose = require('mongoose');
var Language = require('../models/languages.js').Language;
var R = require('ramda');

//Returns all the Menu Itemw as JSON
router.get('/items',function(req,res) {
	
	Item.find(function (err,items) {
	  if (err) return console.error(err);
	  var itemArray = [];

	  for(var i in items){
	  	//create json obect
	  	itemArray.push({name:items[i].name,description:items[i].description,price:items[i].price,
	  	expensive:items[i].checkPrice()}); 

	  	}
	  res.send(itemArray);
	});
});

//Returns all languages as Json
router.get('/languages',function(req,res) {
    
    Language.find(function (err,languages) {
      if (err) return console.error(err);
      var languageArray = [];

      for(var i in languages){
        //create json obect
        languageArray.push(R.toUpper(languages[i].getSymbol())); 
        }
      res.send(R.flatten(languageArray));
    });
});

//Returns all the article as JSON
router.get('/article',function(req,res) {
    
    Article.find(function (err,article) {
      if (err) return console.error(err);
      var articleArray = [];

      for(var i in article){
        //create json obect
        // time object
        var timestamp =  article[i].getCreateTime();
        var formatedDate = timestamp.getDate() + '-' + (timestamp.getMonth()+1) + '-'+ timestamp.getFullYear();
        articleArray.push({title:article[i].getTitle(),commentbody:article[i].getCommentBody(),
         id:article[i]._id, date: formatedDate}); 
        }
      res.send(articleArray);
    });
});

//Returns a particulat article depending on the provided id
router.get('/article/:id',function(req,res) {
    
    Article.findById(req.params.id,function (err,article) {

        if (typeof article != 'undefined'){
            var timestamp =  article.getCreateTime();
            var formatedDate = timestamp.getDate() + '-' + (timestamp.getMonth()+1) + '-'+ timestamp.getFullYear();   
            res.send({title:article.getTitle(),commentbody:article.getCommentBody(),
            id:article._id, date: formatedDate});
        }
      if (err) return console.error(err);


    });
});

//This is used to create articles given the tile and comment body of the article
router.post('/article',function(req,res) {
    console.log(req.body);
        var article1= new Article({title: req.body.title, commentbody: req.body.commentbody});
        console.log(article1.createtime);
    article1.save(function(err,article) {
        if (err) return console.error(err,article);
        console.log("article" + article1.getTitle() + " has been created" + article1.getCommentBody());
    });

    if(article1.title == ''){
        res.status(204);
        res.send(article1);
    }
    else{
        res.send(article1);
    }
});

//Returns yearly graph data as JSON
router.get('/coingraph/:id',function(req,res) {

    Graph.findOne({'symbol': req.params.id} , function (err, graph_result) {
        // Check if it is been 24 hours since last updated 
        if (graph_result != null){
            var expirytime = new Date(graph_result.getUpdatedTime());
            expirytime.setDate(expirytime.getDate() + 1);
        }

        if (graph_result == null || (Date.now() > expirytime) )
            {
                url = 'https://coinmarketcap.com/currencies/' +req.params.id + '/historical-data/?start=20170101&end=20371120';
                request(url, function(error, response, html){

                    if(!error){
                        var $ = cheerio.load(html);
                        var graph = [];//stores the graph
                        var count = 0;
                        var graphset = {};

                        $('td').each(function(i, elem) {
                        count = count % 7;
                        //every time count reaches 0 create new object
                        if(count==0){

                            graphset = {date:"" ,price: "" , volume: ""};
                            graphset.date= $(this).text();
                        }

                        if(count==4){
                         graphset.price= $(this).text();
                        }

                        if (count==5){
                         graphset.volume= parseInt($(this).text().split(',').join(''));
                        }

                        if (count==6){
               
                         graphset.marketcap= parseInt($(this).text().split(',').join(''));
                         graph.push(graphset);
                        }

                        count++;
                        });
                        // Upsert Graph
                        var graphObject= new Graph({symbol: req.params.id , graph : graph});
                        graphObject.save(function(err,result) {
                            console.log('graph has been saved');
                            if(typeof result == 'undefined'){
                                Graph.findOne({symbol: req.params.id } ,function(err,coin){
                                    coin.graph =  graph; 
                                    coin.save(); 
                                })
                            }
                        });
                        res.send(graph);           
                    }
                });
            }
        else{ 
            res.send(graph_result.getGraph());          
            }    
    });
});

//Returns markets for the coin
router.get('/market/:id',function(req,res) {

    Market.findOne({'symbol': req.params.id} , function (err, market_result) {
        // Check if it is been 24 hours since last updated 
        if (market_result != null){
            var expirytime = new Date(market_result.getUpdatedTime());
            expirytime.setDate(expirytime.getDate() + 1);
        }

        if (market_result == null || (Date.now() > expirytime) ){
            url = 'https://coinmarketcap.com/currencies/' +req.params.id + '/#markets';
            request(url, function(error, response, html){

                if(!error){
                    var $ = cheerio.load(html);
                    var graph = [];//stores the graph
                    var count = 0;
                    var graphset = {};

                    $('td').each(function(i, elem) {
                    count = count % 9;
                    //every time count reaches 0 create new object
                    if(count==0){
                        graphset = {market:"" ,pair: "" , volume: "" , price:"", volumepercent:""};
                    }

                    if(count==1){
                        graphset.market= $(this).text();
                    }

                    if(count==2){
                        graphset.pair= $(this).text();
                    }

                    if(count==3){
                        graphset.volume= $(this).text();
                    }

                    if(count==4){
                        graphset.price= $(this).text();
                    }

                    if (count==5){
                        graphset.volumepercent= $(this).text();
                    }

                    if (count==8){
                        graph.push(graphset);
                    }

                    count++;
                    });
                        var graphObject= new Market({symbol: req.params.id , graph : graph});
                        graphObject.save(function(err,result) {
                            console.log('marketlist has been saved');
                            if(typeof result == 'undefined'){
                                Market.findOne({symbol: req.params.id } ,function(err,market){
                                    market.graph =  graph; 
                                    market.save(); 
                                })
                            }
                        });

                res.send(graph);           
                }
            });
        }
        else
        { 
            res.send(market_result.getMarket());          
        }   
    });
 });

//Creates new items provided by the User
router.post('/items',function(req,res) {
	var item1= new Item({name: req.body.name,description: req.body.description,price: req.body.price});
	item1.save(function(err,item) {
		if (err) return console.error(err,item);
		console.log("item" + item1.getName() + " has been created");
	});
	res.send(item1);
});

module.exports= router;