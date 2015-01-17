var test = require('tape')
var keys = require('../')
var through = require('through2')

test('github-keys finds keys', function (assert) {
  var count = 0
  keys('michaelrhodes').pipe(through(
    function (key, enc, next) {
      count++
      next()
    },
    function () {
      assert.ok(count > 0)
      assert.end()
    }
  ))
})

test('github-keys trims surrounding whitespace',
  function (assert) {
    var pass = true
    keys('michaelrhodes').pipe(through(
      function (key, enc, next) {
        if (/(^\s)|(\s$)/.test(key.toString())) {
          pass = false
        }
        next()
      },
      function () {
        assert.ok(pass)
        assert.end()
      }
    ))
  })

test('github-keys emits an error if no user is specified',
  function (assert) {
    assert.plan(1)
    keys().on('error', function (err) {
      assert.ok(err)
    })
  })
