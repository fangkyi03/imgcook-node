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
    ScreenUtil.instance = ScreenUtil(width: 750, height: 1052);
    return View(styles: styles['box'], className: 'box', children: [
      ImageView(
          styles: styles['hd'],
          className: 'hd',
          url:
              "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F54a9daf4cdd6a48b79043f8cf214f876.png"),
      View(styles: styles['bd'], className: 'bd', children: [
        View(styles: styles['layerWrap'], className: 'layerWrap', children: [
          ImageView(
              styles: styles['layer'],
              className: 'layer',
              url:
                  "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Ffcfbf075c5b12bc7ceed83dbc9321f09.png"),
          ImageView(
              styles: styles['largeIcon'],
              className: 'largeIcon',
              url:
                  "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F2cb6b2f3e1e646783bc877e67ade1129.png")
        ]),
        ImageView(
            styles: styles['entryPic'],
            className: 'entryPic',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F14f62b828f9a7424e406e8fce3fbce5a.png")
      ]),
      View(styles: styles['row'], className: 'row', children: [
        ImageView(
            styles: styles['pic'],
            className: 'pic',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F782c87a632e9f55d924567b3c980e534.png"),
        ImageView(
            styles: styles['item'],
            className: 'item',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Ffaf93914d00f58063d5b25e3e6bf1bd9.png"),
        ImageView(
            styles: styles['img'],
            className: 'img',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F251dca62c4a3f2eebe6a459e8a83b5c8.png"),
        ImageView(
            styles: styles['itemLong'],
            className: 'itemLong',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F9d43f5cba729824ee1df3e1c9f54857c.png")
      ]),
      View(styles: styles['submain'], className: 'submain', children: [
        ImageView(
            styles: styles['productLong'],
            className: 'productLong',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F204c2c29b5918c1ba31e0f0a2645701f.png"),
        ImageView(
            styles: styles['itemLong_2'],
            className: 'itemLong_2',
            url:
                "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Ff7c145171be960929163f651fe2d5e1f.png"),
        View(styles: styles['block'], className: 'block', children: [
          ImageView(
              styles: styles['entryPic_2'],
              className: 'entryPic_2',
              url:
                  "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F41955e095435aec7f10d4ec4f14d6bb5.png"),
          ImageView(
              styles: styles['entryPic_3'],
              className: 'entryPic_3',
              url:
                  "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fad049444d73b51d541d83ee15e175b6f.png")
        ])
      ]),
      ImageView(
          styles: styles['main'],
          className: 'main',
          url:
              "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Ffb26fa3e385a8b7b20aab19fd63673ad.png")
    ]);
  }
}

const Map<String, Styles> styles = {
  "box": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#5d4c4c",
    width: 750,
    height: 1052,
    overflowY: "scroll",
  ),
  "hd": Styles(
    width: 750,
    height: 2,
  ),
  "bd": Styles(
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 61,
    paddingRight: 41,
    paddingLeft: 48,
    width: 750,
  ),
  "layerWrap": Styles(
    display: "flex",
    position: "relative",
    alignItems: "flex-start",
    flexDirection: "row",
    width: 289,
    height: 225,
  ),
  "layer": Styles(
    position: "absolute",
    top: 0,
    left: 0,
    width: 289,
    height: 225,
  ),
  "largeIcon": Styles(
    position: "relative",
    marginTop: 146,
    marginLeft: 14,
    width: 66,
    height: 66,
  ),
  "entryPic": Styles(
    marginTop: 25,
    width: 289,
    height: 200,
  ),
  "row": Styles(
    display: "flex",
    flexDirection: "row",
    marginTop: 51,
  ),
  "pic": Styles(
    marginTop: 3,
    marginLeft: 37,
    width: 145,
    height: 239,
  ),
  "item": Styles(
    marginTop: 4,
    marginLeft: 22,
    width: 166,
    height: 193,
  ),
  "img": Styles(
    marginTop: 3,
    marginLeft: 23,
    width: 136,
    height: 231,
  ),
  "itemLong": Styles(
    marginLeft: 16,
    width: 176,
    height: 306,
  ),
  "submain": Styles(
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 37,
    paddingRight: 31,
    paddingLeft: 29,
    width: 750,
  ),
  "productLong": Styles(
    marginTop: 20,
    width: 172,
    height: 283,
  ),
  "itemLong_2": Styles(
    marginTop: 22,
    width: 174,
    height: 273,
  ),
  "block": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    height: 303,
  ),
  "entryPic_2": Styles(
    width: 242,
    height: 128,
  ),
  "entryPic_3": Styles(
    marginTop: 24,
    width: 246,
    height: 148,
  ),
  "main": Styles(
    marginTop: 65,
    width: 750,
    height: 2,
  ),
};
