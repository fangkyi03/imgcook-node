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