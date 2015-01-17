var test = require('tape')
var keys = require('../all')

test('github-keys/all passes an array to the callback',
  function (assert) {
    keys('michaelrhodes', function (err, array) {
      assert.ok(Array.isArray(array))
      assert.end()
    })
  })

test('github-keys/all does error-first if no user is specified', 
  function (assert) {
    keys(function (err, array) {
      assert.ok(err)
      assert.ok(array === void 0)
      assert.end()
    })
  })

test('github-keys/all throws if no callback is specified',
  function (assert) {
    try { keys() }
    catch (err) {
      assert.ok(err)
      assert.end()
    }
  })
