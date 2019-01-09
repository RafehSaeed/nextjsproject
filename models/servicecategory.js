var mongoose = require("mongoose");


// primary identifier category_id 
var categorySchema = mongoose.Schema({
		category_id: {
			type:String , unique: true , required:true
  		},
  	  createtime: {type: Date, default: Date.now},
      categoryDescription: String,
      categoryName: String    
    //  user: User
  });

//returns the title of the Category
categorySchema.methods.getTitle = function  () {
    return this.categoryName;
};

//returns the html of the Category
categorySchema.methods.getDescription = function  () {
  return this.categoryDescription;
};

//returns the html of the Category
categorySchema.methods.getCreateTime = function  () {  
  return this.createtime;
};

//exporting so can be used by app.js
var Category = mongoose.model('Category',categorySchema);

module.exports = {
  Category: Category
};