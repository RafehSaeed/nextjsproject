var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


// put next js shit here 
var ctrlAuth= require('../controllers/authentication');
var ctrlMenu = require('../controllers/menu');
var ctrlCoin = require('../controllers/coin');


// authentication - add auth keyword after route to protect end point with only token access
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//Items
router.get('/items',ctrlMenu);
router.post('/items',ctrlMenu);
router.get('/article',ctrlMenu);
router.get('/article/:id',ctrlMenu);
router.post('/article',ctrlMenu);

//scrape

router.get('/coingraph/:id',ctrlMenu);
router.get('/market/:id',ctrlMenu);

//coinlist

router.get('/coinlist',ctrlCoin);
router.get('/coinlistall',ctrlCoin);
router.get('/gettopperformers',ctrlCoin);

//globaldata

router.get('/about',ctrlCoin);
router.get('/',ctrlCoin);
router.get('/about/:id',ctrlCoin);



router.get('/globaldata',ctrlCoin);


//currencylist

router.get('/currencylist',ctrlCoin);


//language

router.get('/languages',ctrlMenu);

module.exports = router;