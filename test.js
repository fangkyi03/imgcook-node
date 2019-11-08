const imgNode = require('./index')
const path = require('path')
const co = require('co')

imgNode.init({
    'scanDirectory':path.resolve('./test/'),
    'outDirectory':{
        'flutter': path.resolve('./'),
        'web': path.resolve('./'),
        'taro': path.resolve('./'),
    },
})
co(function *() {
    yield imgNode.scan()
    yield imgNode.post()
    yield imgNode.buildFlutter()
    yield imgNode.buildWeb()
    // yield imgNode.buildTaro()
})
