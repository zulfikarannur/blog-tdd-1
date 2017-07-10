var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
require('dotenv').config()

var users = require('./routes/users')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

var current_env = app.settings.env
var db_config = {
  test : "mongodb://localhost/blog-tdd-test",
  development : "mongodb://localhost/blog-tdd"
}

mongoose.connect(db_config[current_env], function (err) {
  if (err) {
    console.log("Database error" + err);
  } else {
    console.log("DB connected");
  }
})

app.use('/user', users)

app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
})

module.exports = app;
