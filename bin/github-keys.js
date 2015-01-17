#!/usr/bin/env node

var keys = require('../')
var through = require('through2')

keys(process.argv[2])
  .on('error', function (err) {
    process.stderr.write(err.message + '\n')
    process.exit(1)
  })
  .pipe(through(function (key, enc, next) {
    console.log(key.toString())
    next()
  }))
