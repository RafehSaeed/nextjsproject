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

// Index page
router.get('/', async (req, res) => {

		let data =  {
			categories: await ServiceCategory.getServiceCategories(),
			services : await Service.getServices()
		};

		nextApp.render(req, res, '/index' , data);
	});

// Get Service Page 
router.get('/service/:service_id(\\d+)/', async (req, res) => {
		
		console.log(req.params)
		let data =  {
			service : await Service.getService(req.params)
		};

		nextApp.render(req, res, '/service' , data);
	});

module.exports= router;
