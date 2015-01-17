var keys = require('./cb')

keys(function (err, all) {
  console.log(err ? err.stack : all)
})
