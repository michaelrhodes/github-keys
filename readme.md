# github-keys
github-keys is a simple module that finds the public keys of a given Github user. Its code is based on a private function in [substack/cipherhub](https://github.com/substack/cipherhub/blob/0f18084aa45b32be85e8bd73aa5457f534a73522/bin/cmd.js#L185-L201), however github-keys maintains a streaming API and doesn’t filter the returned keys.

## Install
``` sh
$ npm install [-g] michaelrhodes/github-keys
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

##### Running the usage examples
To run either of these examples in node or the browser, use the following commands:

```sh
# node
$ npm run example
$ npm run example-all

# browser, obviously
$ npm run example-browser
$ npm run example-all-browser
```

Because Github doesn’t support [CORS](http://enable-cors.org/) for the `/{user}.keys` endpoint, github-keys needs to go through a [reverse proxy](https://github.com/Rob--W/cors-anywhere/) in order to work in the browser. This is easily configured, however, with the browserify transform, [envify](https://github.com/hughsk/envify):

```js
$ CORS_PROXY='http://cors.proxy.com/' browserify -t envify program.js > bundle.js
``` 

### License
[MIT](http://opensource.org/licenses/MIT)
