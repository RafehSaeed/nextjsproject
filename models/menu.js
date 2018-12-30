var mongoose = require("mongoose");

var menuSchema = mongoose.Schema({
      name: String,
      description: String,
      price: Number
  });

//returns name of the item
menuSchema.methods.getName = function  () {
    return this.name;
};

//used for displaying items price as stars in terms of their price on the front end
menuSchema.methods.checkPrice = function  () {
    
    if (this.price>=10){
    	return "expensive";
    }
        return "cheap";
};

//exporting so can be used by app.js
var Item = mongoose.model('Item',menuSchema);

module.exports = {
  Item: Item
};