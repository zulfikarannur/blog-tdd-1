var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username : {
    type : String
  },
  email : {
    type : String
  },
  password : {
    type : String
  }
},{
  timestamps : true
})

var usersModel = mongoose.model('Users', userSchema)

module.exports = usersModel;
