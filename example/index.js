var keys = require('../')
var through = require('through2')

keys('alice').pipe(through(
  function (key, enc, next) {
    console.log(key.toString())
    next()
  }
))
