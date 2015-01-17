var splice = require('stream-splicer')
var hyperquest = require('hyperquest')
var split = require('split2')
var map = require('through2-map')
var url = 'https://github.com/{user}.keys'

function keys (user) {
  var stream = splice([])

  if (!user) {
    process.nextTick(function () {
      stream.emit('error', new Error(
        'No user specified'
      ))
    })
  }
  else {
    stream.push(
      hyperquest(url.replace(/{user}/, user)),
      split(),
      map(trim)
    )
  }

  return stream
}

function trim (buf) {
  return buf.toString().trim() 
}

module.exports = keys
