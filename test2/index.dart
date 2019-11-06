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
