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

# taro 转换输出
```javascript
import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components"
import styles from "./index.module.less"
export default class Test extends Taro.Component {
  render() {
    return (
      <View className={styles.box}>
        <View className={styles.hd}></View>
        <View className={styles.bd}>
          <View className={styles.layerWrap}>
            <View className={styles.layer}></View>
            <View className={styles.largeIcon}></View>
          </View>
          <View className={styles.entryPic}></View>
        </View>
        <View className={styles.row}>
          <View className={styles.pic}></View>
          <View className={styles.item}></View>
          <View className={styles.img}></View>
          <View className={styles.itemLong}></View>
        </View>
        <View className={styles.submain}>
          <View className={styles.productLong}></View>
          <View className={styles.itemLong_2}></View>
          <View className={styles.block}>
            <View className={styles.entryPic_2}></View>
            <View className={styles.entryPic_3}></View>
          </View>
        </View>
        <View className={styles.main}></View>
      </View>
    )
  }
}
```

# web 转换输出
```javascript
import React, { Component } from "react"
import styles from "./index.less"
export default class Test extends Component {
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.largeItem}></div>
      </div>
    )
  }
}

```

# flutter 转换输出
```dart
import 'package:flutter/material.dart';
import 'package:rlstyles/main.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class TestView extends StatefulWidget {
  TestView({Key key, this.navigation}) : super(key: key);
  final NavigationOption navigation;
  _TestState createState() => _TestState();
}

class _TestState extends State<TestView> {
  @override
  Widget build(BuildContext context) {
    ScreenUtil.instance = ScreenUtil(width: 750, height: 750);
    return View(styles: styles['block'], className: 'block', children: [
      View(styles: styles['largeItem'], className: 'largeItem', children: [])
    ]);
  }
}

const Map<String, Styles> styles = {
  "block": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    borderRadius: 165,
    backgroundColor: "#000000",
    width: 750,
    height: 750,
    overflowY: "scroll",
  ),
  "largeItem": Styles(
    width: 750,
    height: 750,
  ),
};

```

# flutter ui 组件库介绍
[rlstyles](https://github.com/fangkyi03/rlstyle.git)
里面有详细的参数说明

# 未来功能规划
```javascript
这版本功能做完以后 下阶段目标为用flutter实现一个小程序内核框架
目标是将现有的taro或者vue小程序项目 直接flutter跑起来
可以使用小程序方式来做热更新
```