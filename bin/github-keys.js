#!/usr/bin/env node

var keys = require('../')
var through = require('through2')
var user = process.argv[2]

if (!user) {
  process.stderr.write(
    'usage: github-keys {username}\n'
  )
  process.exit(1)
}

keys(user)
  .on('error', function (err) {
    process.stderr.write(err.message + '\n')
    process.exit(1)
  })
  .pipe(through(function (key, enc, next) {
    console.log(key.toString())
    next()
  }))
