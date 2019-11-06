const imgNode = require('./index')
const path = require('path')
const co = require('co')

imgNode.init({
    'scanDirectory':path.resolve('./test/'),
    'outDirectory':{
        'flutter':path.resolve('./'),
        'web': path.resolve('./'),
        'taro': path.resolve('./'),
    },
    // 请在这里输入自己的imgcook token与cookie
    'ctoken':'',
    'cookie':''
})
co(function *() {
    yield imgNode.scan()
    yield imgNode.post()
    yield imgNode.buildFlutter()
    yield imgNode.buildWeb()
    yield imgNode.buildTaro()
})
