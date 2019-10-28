const imgNode = require('./index')
const path = require('path')
const co = require('co')

imgNode.init(path.resolve('./test/'))
co(function *() {
    yield imgNode.scan()
    yield imgNode.post()
    yield imgNode.buildFlutter()
})
