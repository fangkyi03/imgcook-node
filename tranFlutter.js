const fs = require('fs')
const template = `
import 'package:flutter/material.dart';
import 'package:rlstyles/main.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
class TestView extends StatefulWidget {
  TestView({Key key,this.navigation}) : super(key: key);
  final NavigationOption navigation;
  _TestState createState() => _TestState();
}

class _TestState extends State<TestView> {
  @override
  Widget build(BuildContext context) {
    ScreenUtil.instance = ScreenUtil(width:$$width$$,height:$$height$$);
    return $$$build$$$;
  }
}
const Map<String,Styles> styles = {
 $$$styles$$$
};
`

let styles = {}
// let index  = 0;
function getChildren(json, index) {

    if (json.children) {
        return json.children.map((e) => read(e, index + 1))
    } else {
        return []
    }
}

function tranStyle(data, index) {
    let text = ''
    Object.keys(data).forEach((e, i) => {
        if (data[e] == null || data[e] == 'null') {
            delete data[e]
        }else if (e == 'lineHeight' && !data['height']) {
            text += '           ' + 'height:' + Number(data[e].replace('px', '')) + ',' + '\n'
        } else if (typeof data[e] == 'number') {
            text += '           ' + e + ':' + data[e] + ',' + '\n'
        } else {
            text += '           ' + e + ':' + `"${data[e]}"` + ',' + '\n'
        }
    })
    return 'Styles(\n' + text + ' '.repeat(index * 8) + ')'
}

function createDiv(props, style, artboardImg, index) {
    index += 1; 
    styles[props.className] = style;
    return (Children, childArr, attrs) => {
        if (typeof style['borderWidth'] == 'string') {
            styles[props.className]['borderWidth'] = Number(styles[props.className]['borderWidth'].replace('px', ''))
        }
        if (typeof styles[props.className].opacity == 'string') {
            styles[props.className].opacity = Number(styles[props.className].opacity.replace('px', ''))
        }
        if (typeof styles[props.className].opacity == 'string') {
            styles[props.className].opacity = Number(styles[props.className].opacity.replace('px', ''))
        }
        return `View(\n${' '.repeat(index * 6)}styles:styles['${props.className}'],className:'${props.className}',\n${' '.repeat(index * 6)}children:[\n${' '.repeat(index * 6 * 1.5)}${Children}])`
        // 
        // }else {
        //     return `View(\n${' '.repeat(index * 6)}styles:styles['${props.className}'],className:'${props.className}',\n${' '.repeat(index * 6)}children:[\n${' '.repeat(index * 6 * 1.5)}${Children}])`
        // }   
    }
}

function createImage(props, style, index) {
    index += 1;
    styles[props.className] = style;
    return Children => {
        return `ImageView(\n${' '.repeat(index * 6)}styles:styles['${props.className}'],className:'${props.className}',url:"${props['src']}")`
    }
}

function createText(props, style, index) {
    index += 1;
    styles[props.className] = style;
    return Children => {
        if (!style.height) {
            styles[props.className].height = typeof style.fontSize == 'string' ? Number(style.fontSize.replace('px', '')) : style.fontSize;
        }
        if (typeof styles[props.className].letterSpacing == 'string') {
            styles[props.className].letterSpacing = Number(styles[props.className].letterSpacing.replace('px', ''))
        }
        if (typeof styles[props.className].opacity == 'string') {
            styles[props.className].opacity = Number(styles[props.className].opacity.replace('px', ''))
        }
        delete styles[props.className].lines;
        if (typeof style['fontSize'] == 'string') {
            styles[props.className]['fontSize'] = Number(style['fontSize'].replace('px', ''))
        }
        return `\nTextView('${props['text'].replace(/[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g,'').replace(/'\n'/g, '').replace(/'：'/g, '').replace(/'\''/g,'')}',\n${' '.repeat(index * 6)}styles:styles['${props.className}'],className:'${props.className}')`
    }
}


function read(json, index) {
    switch (json.type) {
        case 'Repeat':
        case 'Shape':
        case 'Block':
            return createDiv(json.attrs, json.style, json.artboardImg, index)(getChildren(json, index), json.children, json.attrs)
        case "Image":
            return createImage(json.attrs, json.style, index)(getChildren(json))
        case 'Text':
            return createText(json.attrs, json.style, index)(getChildren(json))
        default:
            return createDiv(json.attrs, json.style, index)(getChildren(json))
    }
}

function getStyles(className) {
    let text = ''
    Object.keys(styles).forEach((e, index) => {
        if (e == className) {
            if (styles[e].width && styles[e].width > 750) {
                styles[e].overflowX = 'scroll'
            } else if (styles[e].height && styles[e].height > 1330) {
                styles[e].overflowY = 'scroll'
            } else {
                styles[e].overflowY = 'scroll'
            }
            // if (!styles[e].backgroundColor) {
            //     styles[e].backgroundColor = 'white'
            // }
        }
        text += `"${e}":
         ${tranStyle(styles[e], 0)},`
    })
    return text;
}



function tranForm (json,file) {
    const text = read(json, 0)
    let style = getStyles(json.attrs.className)
    let box = json.style;
    const newTemplate = template.replace('$$$build$$$', text).replace('$$$styles$$$', style).replace('$$width$$', box.width || 750).replace('$$height$$', box.height || 1330)
    fs.writeFileSync(file, newTemplate)
}

module.exports = {
    tranForm
}