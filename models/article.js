var mongoose = require("mongoose");

var articleSchema = mongoose.Schema({
		title: {
			type:String , unique: true , required:true
  		},
  	  createtime: {type: Date, default: Date.now},
      commentbody: String
    //  user: User
  });

//returns the title of the Article
articleSchema.methods.getTitle = function  () {
    return this.title;
};

//returns the html of the article
articleSchema.methods.getCommentBody = function  () {
  return this.commentbody;
};

//returns the html of the article
articleSchema.methods.getCreateTime = function  () {  
  return this.createtime;
};

//exporting so can be used by app.js
var Article = mongoose.model('Article',articleSchema);

module.exports = {
  Article: Article
};