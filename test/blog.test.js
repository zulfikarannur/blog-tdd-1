var chai = require('chai')
var chaiHttp = require('chai-http')
var hash = require('object-hash')
var should = chai.should()
var server = require('../app')
var articlesModel = require("../models/articlesModel")
chai.use(chaiHttp)
var token = ''

describe( "Simple Blog" ,function () {
  it("Sign up an user", function (done) {
    chai.request(server)
    .post('/user/signup')
    .send({
      username : 'test-user',
      email : 'test_user@mail.com',
      password : 'test-password'
    })
    .end(function (err,result) {
      result.should.have.status(200)
      result.should.not.have.status(500)
      result.should.be.a('object')
      done()
    })
  })

  it("Sign in an user", function (err,done) {
    chai.request(server)
    .post('/user/signin')
    .type('form')
    .send({
      username : 'test-user',
      password : 'test-password'
    })
    .end(function (result) {
      result.should.have.status(200)
      result.should.not.have.status(500)
      result.should.be.a('object')
      result.should.have.property('token')
      token = result.token
      done()
    })
  })

  // it("Saved an article", function (done) {
  //   chai.request(server)
  //   .post('/article')
  //   .set('token', token)
  //   .send({
  //     author: req.decoded.id,
  //     title: "This is title",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     category: 'Fiction'
  //   })
  //   .end(function (result) {
  //     result.should.have.status(200)
  //     result.should.not.have.status(500)
  //     result.should.have.property('title')
  //     result.should.have.property('content')
  //     result.should.have.property('category')
  //   })
  //   done()
  // })
  //
  // it("Update an article",function (done) {
  //   chai.request(server)
  //   .set('token', token)
  //   .post('/article')
  //   .set('token', token)
  //   .send({
  //     author: req.decoded.id,
  //     title: "This is title",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     category: 'Fiction'
  //   })
  //   .end(function (resultPost) {
  //     chai.request(server)
  //     .set('token', token)
  //     .patch('/article/' + resultPost._id)
  //     .send({
  //       title: "Updated title"
  //     })
  //     .end(function (result) {
  //       result.should.have.status(200)
  //       result.should.not.have.status(500)
  //       result.should.have.property('title').equal("Updated title")
  //       result.should.have.property('content')
  //       result.should.have.property('category')
  //     })
  //   })
  //   done()
  // })
  //
  // it("Get saved article", function (done) {
  //   chai.request(server)
  //   .set('token', token)
  //   .post('/article')
  //   .set('token', token)
  //   .send({
  //     author: req.decoded.id,
  //     title: "This is title",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     category: 'Fiction'
  //   })
  //   .end(function (resultPost) {
  //     chai.request(server)
  //     .set('token', token)
  //     .get('/article/' + resultPost._id)
  //     .end(function (result) {
  //       result.should.have.status(200)
  //       result.should.not.have.status(500)
  //       result.should.have.property('content')
  //       result.should.have.property('category')
  //     })
  //   })
  //   done()
  // })
  //
  // it("Delete an article", function (done) {
  //   chai.request(server)
  //   .set('token', token)
  //   .post('/article')
  //   .set('token', token)
  //   .send({
  //     author: req.decoded.id,
  //     title: "This is title",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     category: 'Fiction'
  //   })
  //   .end(function (resultPost) {
  //     chai.request(server)
  //     .set('token', token)
  //     .get('/article/' + resultPost._id)
  //     .end(function (result) {
  //       result.should.have.status(200)
  //       result.should.not.have.status(500)
  //     })
  //   })
  //   done()
})
