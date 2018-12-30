var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var R = require('ramda');
// Stores the list of all coins gotten from marketcap API
var currencySchema = new Schema({
	_id: {type: String},
	currencyList:{
		type: Object
	}
});
//Returns all of the currencyList
currencySchema.methods.getCurrencyList = function  () {
	return this.currencyList;
};

var CurrencyList = mongoose.model('CurrencyList',currencySchema);
module.exports = {
CurrencyList: CurrencyList
};
