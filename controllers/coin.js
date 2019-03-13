var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var helper = require('../helpers/helper.js');
var next = require('next');
var dev = process.env.NODE_DEV !== 'production' //true false
var app = next({ dev })
var handle = app.getRequestHandler() //part of next config
var ServiceCategory  = require('../models/servicecategory.js').ServiceCategory;
var Service  = require('../models/service.js').Service;

//Weather
var weather = require('weather-js');

//Returns the coins list in JSON format
router.get('/about', (req, res) => {
    return nextApp.render(req, res, '/about-landing' ,
		{
			data: 'No parameter for this route',
			value: false,
			message: 'This is a static route!'
		})
  });

router.get('/about/:id', (req, res) => {
	
		var weatherResults = null;

		weather.find({search: req.params.id, degreeType: 'C'}, function(err, result) {
		  if(err) console.log(err);

		  weatherResults = result[0];

  	  return nextApp.render(req, res, '/about' , {
		  	data: req.params.id,
		  	value: false,
		  	message: 'Paramater Found!',
		  	weather: weatherResults
		  })
		});
  });

// Index page
router.get('/', (req, res) => {

	// evaluate targets 
	async function getData(){
		let categories  = await ServiceCategory.getServiceCategories();
		let services  = await Service.getServices();

		let data =  {
			categories : categories,
			services : services
		};

		nextApp.render(req, res, '/index' , data);
	}

	// Trigger model calls 
	getData();
});

// Get Service Page 
router.get('/service/:service_id', (req, res) => {
	

	// evaluate targets 
	async function getData(){
		
		let service  = await Service.getService(req.params);

		let data =  {
			service : service
		};

		nextApp.render(req, res, '/service' , data);
	}

	// Trigger model calls 
	getData();

  });


module.exports= router;
