var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var R = require('ramda');
// Stores the list of all coins gotten from marketcap API
var graphSchema = new Schema({
	symbol: {
    	type:String , unique: true , required:true
    }
    ,graph:{
		type: Object
	}
},{timestamps: true});
//Returns the graph
graphSchema.methods.getGraph = function  () {
	return this.graph;
};

graphSchema.methods.getUpdatedTime = function  () {
	return this.updatedAt;
};



var Graph = mongoose.model('Graph',graphSchema);
module.exports = {
Graph: Graph
};
