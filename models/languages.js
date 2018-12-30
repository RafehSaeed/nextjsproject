var mongoose = require("mongoose");

var languageSchema = mongoose.Schema({
      symbol: {
      type:String , unique: true , required:true
      },

  });

//returns the name of the language
languageSchema.methods.getSymbol = function  () {
    return this.symbol;
};


//exporting so can be used by app.js
var Language = mongoose.model('Language',languageSchema);

module.exports = {
  Language: Language
};