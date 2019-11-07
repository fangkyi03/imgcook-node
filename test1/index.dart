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
    ScreenUtil.instance = ScreenUtil(width: 750, height: 523);
    return View(styles: styles['block_4'], className: 'block_4', children: [
      View(styles: styles['box'], className: 'box', children: [
        View(styles: styles['bd'], className: 'bd', children: [
          TextView('ew', styles: styles['txt'], className: 'txt')
        ]),
        View(styles: styles['ft'], className: 'ft', children: [
          View(styles: styles['color'], className: 'color', children: []),
          View(styles: styles['block_3'], className: 'block_3', children: [
            View(styles: styles['group'], className: 'group', children: [
              ImageView(
                  styles: styles['largeIcon'],
                  className: 'largeIcon',
                  url:
                      "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fc2a57287df60215c6ac139cd98ae2cf9.png"),
              View(
                  styles: styles['container'],
                  className: 'container',
                  children: [
                    View(
                        styles: styles['outer'],
                        className: 'outer',
                        children: [
                          View(
                              styles: styles['wrap'],
                              className: 'wrap',
                              children: [
                                TextView('摄影大大Qu',
                                    styles: styles['photography'],
                                    className: 'photography'),
                                ImageView(
                                    styles: styles['label'],
                                    className: 'label',
                                    url:
                                        "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2F6d8497f9377e668e1477188db648eab1.png")
                              ]),
                          View(
                              styles: styles['priceWrap'],
                              className: 'priceWrap',
                              children: [
                                TextView('回textfavorableRate',
                                    styles: styles['hui'], className: 'hui'),
                                TextView('¥',
                                    styles: styles['rmb'], className: 'rmb'),
                                TextView('88',
                                    styles: styles['price'], className: 'price')
                              ]),
                          TextView('好子评率90',
                              styles: styles['goodEvaluationRate'],
                              className: 'goodEvaluationRate')
                        ]),
                    View(
                        styles: styles['block'],
                        className: 'block',
                        children: [
                          View(
                              styles: styles['color_2'],
                              className: 'color_2',
                              children: []),
                          TextView('5分钟前来过',
                              styles: styles['minutesBefore'],
                              className: 'minutesBefore'),
                          TextView('·',
                              styles: styles['txt_2'], className: 'txt_2'),
                          TextView('杭州阿里巴巴西溪园区',
                              styles: styles['info'], className: 'info')
                        ])
                  ])
            ]),
            View(styles: styles['block_2'], className: 'block_2', children: [
              View(styles: styles['tagWrap'], className: 'tagWrap', children: [
                TextView('全辆', styles: styles['tag'], className: 'tag')
              ]),
              TextView('马米亚RB67超级大全套预售不多解释',
                  styles: styles['title'], className: 'title')
            ]),
            TextView('只问全国能不能找到我这样的一套',
                styles: styles['title_2'], className: 'title_2'),
            View(styles: styles['group_4'], className: 'group_4', children: [
              View(styles: styles['group_3'], className: 'group_3', children: [
                View(
                    styles: styles['group_2'],
                    className: 'group_2',
                    children: [
                      ImageView(
                          styles: styles['item'],
                          className: 'item',
                          url:
                              "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fca42e4553eeab290188c984495ae9091.png"),
                      ImageView(
                          styles: styles['product'],
                          className: 'product',
                          url:
                              "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Ff9f5f778e3599bed5672badb9b61d585.png")
                    ]),
                View(
                    styles: styles['container_2'],
                    className: 'container_2',
                    children: [
                      ImageView(
                          styles: styles['mark'],
                          className: 'mark',
                          url:
                              "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fc8f7f1531687f94864001e7f0704b401.png"),
                      TextView('786', styles: styles['num'], className: 'num'),
                      ImageView(
                          styles: styles['shopCreditLv0'],
                          className: 'shopCreditLv0',
                          url:
                              "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fbd57b51cf973567cbf69bac0b890b41a.png"),
                      TextView('265',
                          styles: styles['num_2'], className: 'num_2')
                    ])
              ]),
              View(
                  styles: styles['layerWrap'],
                  className: 'layerWrap',
                  children: [
                    ImageView(
                        styles: styles['layer'],
                        className: 'layer',
                        url:
                            "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fa173c81a881f5df37fd462417ef93928.png"),
                    ImageView(
                        styles: styles['logo'],
                        className: 'logo',
                        url:
                            "http://idlefish-autoui.oss-cn-hangzhou.aliyuncs.com/aliyun_k8s%2Fai_image%2Fc916b9c22066f5c6c7a92eef76f750cc.png")
                  ])
            ])
          ]),
          View(styles: styles['colorDiv'], className: 'colorDiv', children: [])
        ])
      ])
    ]);
  }
}

const Map<String, Styles> styles = {
  "box": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    borderRadius: 8,
    backgroundColor: "#ffffff",
    width: 726,
    height: 517,
  ),
  "hd": Styles(
    width: 750,
    height: 2,
  ),
  "bd": Styles(
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 725,
  ),
  "layerWrap": Styles(
    display: "flex",
    position: "relative",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 6,
    width: 162,
    height: 293,
  ),
  "layer": Styles(
    position: "absolute",
    top: 0,
    left: 0,
    width: 162,
    height: 293,
  ),
  "largeIcon": Styles(
    marginTop: 27,
    width: 78,
    height: 78,
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
    width: 210,
    height: 210,
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
    flexDirection: "row",
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
  "block_4": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    width: 750,
    height: 523,
    overflowY: "scroll",
  ),
  "txt": Styles(
    width: 715,
    height: 10,
    lineHeight: 16,
    whiteSpace: "nowrap",
    color: "#669df5",
    fontSize: 11,
    fontWeight: 400,
  ),
  "ft": Styles(
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    width: 726,
    height: 505,
  ),
  "color": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 1,
    backgroundColor: "#9fc2f9",
    width: 2,
    height: 492,
  ),
  "block_3": Styles(
    display: "flex",
    position: "relative",
    alignItems: "flex-start",
    flexDirection: "column",
    width: 694,
    height: 505,
  ),
  "group": Styles(
    display: "flex",
    flexDirection: "row",
  ),
  "container": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: 24,
    height: 105,
  ),
  "outer": Styles(
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 516,
    height: 72,
  ),
  "wrap": Styles(
    display: "flex",
    flexDirection: "row",
  ),
  "photography": Styles(
    marginTop: 28,
    width: 154,
    height: 41,
    lineHeight: 41,
    whiteSpace: "nowrap",
    color: "#222222",
    fontSize: 29,
    fontWeight: 400,
  ),
  "label": Styles(
    marginTop: 38,
    marginLeft: 14,
    width: 60,
    height: 20,
  ),
  "priceWrap": Styles(
    display: "flex",
    position: "relative",
    flexDirection: "row",
    width: 262,
    height: 72,
  ),
  "hui": Styles(
    width: 161,
    height: 50,
    lineHeight: 50,
    whiteSpace: "nowrap",
    color: "#fdfeff",
    fontSize: 36,
    fontWeight: 400,
  ),
  "rmb": Styles(
    marginTop: 32,
    marginLeft: 46,
    width: 23,
    height: 36,
    lineHeight: 35,
    whiteSpace: "nowrap",
    color: "#ea5552",
    fontSize: 19,
    fontWeight: 400,
  ),
  "price": Styles(
    marginTop: 27,
    marginLeft: 1,
    width: 32,
    height: 45,
    lineHeight: 45,
    whiteSpace: "nowrap",
    color: "#ea5552",
    fontSize: 27,
    fontWeight: 400,
  ),
  "goodEvaluationRate": Styles(
    position: "absolute",
    top: 25,
    left: 246,
    width: 166,
    height: 45,
    lineHeight: 45,
    whiteSpace: "nowrap",
    color: "#ea5552",
    fontSize: 32,
    fontWeight: 400,
  ),
  "color_2": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 1,
    backgroundColor: "#7ac977",
    width: 13,
    height: 13,
  ),
  "minutesBefore": Styles(
    marginLeft: 6,
    width: 130,
    height: 32,
    lineHeight: 32,
    whiteSpace: "nowrap",
    color: "#888888",
    fontSize: 23,
    fontWeight: 400,
  ),
  "txt_2": Styles(
    width: 12,
    height: 32,
    lineHeight: 32,
    whiteSpace: "nowrap",
    color: "#888888",
    fontSize: 23,
    fontWeight: 400,
  ),
  "info": Styles(
    width: 230,
    maxWidth: 342,
    height: 32,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 32,
    whiteSpace: "nowrap",
    color: "#888888",
    fontSize: 23,
    fontWeight: 400,
  ),
  "block_2": Styles(
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  ),
  "tagWrap": Styles(
    boxSizing: "border-box",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 98,
    borderRadius: 6,
    backgroundColor: "#ea5552",
    paddingRight: 7,
    paddingLeft: 7,
    height: 27,
  ),
  "tag": Styles(
    width: 39,
    height: 26,
    lineHeight: 26,
    whiteSpace: "nowrap",
    color: "#ffffff",
    fontSize: 19,
    fontWeight: 400,
  ),
  "title": Styles(
    marginLeft: 3,
    width: 462,
    height: 40,
    lineHeight: 40,
    whiteSpace: "nowrap",
    color: "#222222",
    fontSize: 28,
    fontWeight: 400,
  ),
  "title_2": Styles(
    marginTop: 1,
    marginLeft: 96,
    width: 421,
    maxWidth: 586,
    height: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: 40,
    whiteSpace: "nowrap",
    color: "#222222",
    fontSize: 28,
    fontWeight: 400,
  ),
  "group_4": Styles(
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 11,
    width: 694,
  ),
  "group_3": Styles(
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    height: 293,
  ),
  "group_2": Styles(
    display: "flex",
    flexDirection: "row",
  ),
  "product": Styles(
    marginLeft: 7,
    width: 209,
    height: 210,
  ),
  "container_2": Styles(
    display: "flex",
    flexDirection: "row",
    marginTop: 25,
  ),
  "mark": Styles(
    marginTop: 7,
    marginLeft: 2,
    width: 30,
    height: 20,
  ),
  "num": Styles(
    marginLeft: 7,
    width: 41,
    height: 32,
    lineHeight: 32,
    whiteSpace: "nowrap",
    color: "#888888",
    fontSize: 23,
    fontWeight: 400,
  ),
  "shopCreditLv0": Styles(
    marginTop: 6,
    marginLeft: 24,
    width: 24,
    height: 23,
  ),
  "num_2": Styles(
    marginLeft: 11,
    width: 42,
    height: 32,
    lineHeight: 32,
    whiteSpace: "nowrap",
    color: "#888888",
    fontSize: 23,
    fontWeight: 400,
  ),
  "logo": Styles(
    position: "relative",
    marginTop: 246,
    marginLeft: 102,
    width: 31,
    height: 13,
  ),
  "colorDiv": Styles(
    position: "absolute",
    top: 1,
    right: 0,
    borderRadius: 1,
    backgroundColor: "#000000",
    width: 3,
    height: 212,
  ),
};
