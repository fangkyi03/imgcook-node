# 安装
```javascript
npm i --save imgcook-node
```

# 示例
```javascript
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

```

# 支持功能
```javascript
输入文件支持jpg png psd 
输出文件类型 支持web taro flutter 
只要指定一个目录 就会自动将图片进行转换成对应平台代码
```

# 未来功能规划
```javascript
这版本功能做完以后 下阶段目标为用flutter实现一个小程序内核框架
目标是将现有的taro或者vue小程序项目 直接flutter跑起来
可以使用小程序方式来做热更新
```