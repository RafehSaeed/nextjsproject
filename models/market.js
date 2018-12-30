var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var R = require('ramda');
// Stores the list of all markets for a coin gotten from marketcap API
var marketSchema = new Schema({
	symbol: {
    	type:String , unique: true , required:true
    }
    ,graph:{
		type: Object
	}
},{timestamps: true});
//Returns the graph
marketSchema.methods.getMarket = function  () {
	return this.graph;
};

marketSchema.methods.getUpdatedTime = function  () {
	return this.updatedAt;
};



var Market = mongoose.model('Market',marketSchema);
module.exports = {
Market: Market
};
