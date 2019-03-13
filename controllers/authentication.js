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

// module.exports.register = function(req, res) {
	
// 	var user = new User();

// 	user.name = req.body.name;
// 	user.email = req.body.email;

// 	user.setPassword(req.body.password);

// 	user.save(function(err) {
// 		if (err) {
// 			res.status(404).json(err);
// 			return;
// 		}
// 		console.log(err);
// 		console.log("usersaved");
// 		var token;
// 		token = user.generateJwt();
// 		res.status(200);
// 		res.json({
// 			"token" : token
// 		});
// 	});
// };


// For registering a user 
//Returns the coins list in JSON format
router.route('/register')
	.get((req, res) => {

	console.log('Register page using get')
	nextApp.render(req, res, '/register');



	})
	.post((req,res) => {


	console.log('Register page using post')
	// nextApp.render(req, res, '/register' , data);



	});

module.exports.login = function(req, res) {

	passport.authenticate('local', function(err, user, info){
		var token;

		// If Passport throws/catches an error
		if (err) {
			res.status(404).json(err);
			return;
		}

		// If a user is found
		if(user){
			token = user.generateJwt();
			console.log("loaded");
			res.status(200);
			res.json({
				"token" : token
			});
		} else {
			// If user is not found
			res.status(401).json(info);
		}
	})(req, res);
};


module.exports= router;
