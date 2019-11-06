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
    'ctoken':'tMdXXonr-k2X0QYcN8tHrBqpmb_wozHp3JhU',
    'cookie':'ctoken=UuB2kW2446pzqpuHpMjycH4L; EGG_SESS_DAVINCI=B8G5XPvkjePB-ITpJ2Se0cJV9OMYPrHlX5Fuhegay2nQ2V-hLqunk-sSfyky3kNyJxevM4z2HNctA0IwjU6C5u7gv08mbfhEgTLHOGThnDQ=; cna=v+BJFiJ16jkCASe8LnIZR/Tq; isg=BPb2H_U1t4NOBENnYo_4ALhHRyr4FzpRsz6QR2DfsVl0o5Q9yaOuY84VvzdqCzJp'
})
co(function *() {
    yield imgNode.scan()
    yield imgNode.post()
    yield imgNode.buildFlutter()
    yield imgNode.buildWeb()
    yield imgNode.buildTaro()
})
