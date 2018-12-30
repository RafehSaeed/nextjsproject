var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var R = require('ramda');
// Stores the list of all coins gotten from marketcap API
var globalSchema = new Schema({
	_id: {type: String},
	globalData:{
		type: Object
	}
});
//Returns all of the currencyList
globalSchema.methods.getGlobalData = function  () {
	return this.globalData;
};

var GlobalData = mongoose.model('GlobalData',globalSchema);
module.exports = {
GlobalData: GlobalData
};
