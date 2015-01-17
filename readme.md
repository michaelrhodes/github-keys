# github-keys
github-keys is a simple module that finds the public keys of a given github user. Its code is based on a private function in [substack/cipherhub](https://github.com/substack/cipherhub/blob/1.0.1/bin/cmd.js#L185-L201), however github-keys maintains a streaming API and doesn’t filter the returned keys.

## Install
``` sh
$ npm install michaelrhodes/github-keys
```

### Usage
```js
var keys = require('github-keys')
var through = require('through2')

keys('alice').pipe(through(
  function (key, enc, next) {
    console.log(key.toString())
    next()
  }
))
```

#### w/callbacks
Sometimes you just want all the keys in an array,
so github-keys provides an alternate endpoint to
facilitate that use-case.

```js
var keys = require('github-keys/all')

keys('alice', function (err, array) {
  console.log(array)
})
```

### License
[MIT](http://opensource.org/licenses/MIT)
