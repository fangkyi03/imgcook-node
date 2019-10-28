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
    flexDirection: "row",
    borderRadius: 165,
    backgroundColor: "#000000",
    width: 750,
    height: 750,
    overflowY: "scroll",
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
  "largeItem": Styles(
    width: 750,
    height: 750,
  ),
};
