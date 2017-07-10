var usersModel = require('../models/usersModel')
var jwt = require('jsonwebtoken')
var hash = require('object-hash')

var signUp = function (req,res) {
  usersModel.create({
    username : req.body.username,
    email : req.body.email,
    password : hash(req.body.password)
  }, function (err,result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(result)
    }
  })
}

var signIn = function (req,res) {
  usersModel.findOne({
    username : req.body.username
  }, function (err, result) {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send({token : jwt.sign({_id : result._id}, process.env.JWT)})
    }
  })
}

module.exports = {
  signUp,
  signIn
};
