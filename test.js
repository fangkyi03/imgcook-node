const imgNode = require('imgcook-node')
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
    'ctoken':'Y5OuW5iN-wwc-6BiL1K_5o4iQUjE_RNESr50',
    'cookie':'EGG_SESS_DAVINCI=B8G5XPvkjePB-ITpJ2Se0cJV9OMYPrHlX5Fuhegay2nQ2V-hLqunk-sSfyky3kNyJxevM4z2HNctA0IwjU6C5u7gv08mbfhEgTLHOGThnDQ=; cna=v+BJFiJ16jkCASe8LnIZR/Tq; ctoken=7G-rmtmpHGk_GlBWbno5xfC6; isg=BNnZ9oFX4ItJPLwemf4v-fPm6MOzZs0YiD8PXvuOcoB_AviUQrQx6aBUAI7RumVQ'
})
co(function *() {
    yield imgNode.scan()
    yield imgNode.post()
    yield imgNode.buildFlutter()
    yield imgNode.buildWeb()
    // yield imgNode.buildTaro()
})
