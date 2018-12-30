var mongoose = require("mongoose");

var dealSchema = mongoose.Schema({
      name: String,
      description: String,
      price: Number
  });

dealSchema.methods.getName = function  () {
    return this.name;
};

var Deal = mongoose.model('Deal',dealSchema);

module.exports = {
  Deal: Deal
};