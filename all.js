var keys = require('./')
var through = require('through2')

module.exports = function (user, cb) {
  if (typeof user == 'function') {
    cb = user
    user = ''
  }
 
  var all = []
  keys(user).on('error', cb).pipe(through(
    function write (key, enc, next) {
      all.push(key.toString())
      next() 
    },
    function end () {
      cb(null, all)
    }
  ))
}
