var mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
  author : {
    ref : 'Users',
    type : mongoose.Schema.Types.ObjectId
  },
  title : {
    type : String,
    required : true
  },
  content: {
    type : String,
    required : true
  }
},{
  timestamps : true
})

var articlesModel = mongoose.model('Articles',articleSchema)

module.exports = articlesModel;
