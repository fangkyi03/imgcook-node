const fs = require('fs')
const prettier = require("prettier");
var beautify_css = require('js-beautify').css;
const path = require('path')
const template = `
import React, { Component } from 'react';
import styles from './index.less'
export default class Test extends Component {
  render() {
    return (
        $$$build$$$
    );
  }
}
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
        if (e == 'lineHeight' && !data['height']) {
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
        // if (typeof style['borderWidth'] == 'string') {
        //     styles[props.className]['borderWidth'] = Number(style['borderWidth'].replace('px', ''))
        // }
        let childrenText = '';
        Children.forEach((e) => {
            childrenText += e
        })
        return `<div ${' '.repeat(index * 6)}className={styles.${props.className}}>\n${childrenText}</div>\n`
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
        return `<img ${' '.repeat(index * 6)} className={styles.${props.className}} src={'${props['src']}'}/>\n`
    }
}

function createText(props, style, index) {
    index += 1;
    styles[props.className] = style;
    return Children => {
        // if (!style.height) {
        //     styles[props.className].height = typeof style.fontSize == 'string' ? Number(style.fontSize.replace('px', '')) + 3 : style.fontSize + 3;
        // }
        // if (typeof style['fontSize'] == 'string') {
        //     styles[props.className]['fontSize'] = Number(style['fontSize'].replace('px', ''))
        // }
        return `<span ${' '.repeat(index * 6)} className={styles.${props.className}}>${props['text']}</span>\n`
    }
}


function read(json, index) {
    switch (json.type) {
        case 'Repeat':
        case 'Shape':
        case 'Block':
        case 'shape':
            return createDiv(json.attrs, json.style, json.artboardImg, index)(getChildren(json, index), json.children, json.attrs)
        case "Image":
        case 'image':
            return createImage(json.attrs, json.style, index)(getChildren(json))
        case 'Text':
        case 'text':    
            return createText(json.attrs, json.style, index)(getChildren(json))
        default:
            return createDiv(json.attrs, json.style, index)(getChildren(json))
    }
}

function getStyles() {
    let text = ''
    Object.keys(styles).forEach((e) => {
        text += `"${e}":
         ${tranStyle(styles[e], 0)},`
    })
    return text;
}

function writeStyle(outFile) {
    let styleText = ''
    Object.keys(styles).forEach((e) => {
        styleText += '.' + e + '{\n'
        Object.keys(styles[e]).forEach((el) => {
            if (el !== 'lines') {
                if (typeof styles[e][el] == 'number') {
                    styleText += el.replace(/([A-Z])/g, "-$1").toLowerCase() + ':' + styles[e][el] + 'px' + ';\n'
                } else {
                    styleText += el.replace(/([A-Z])/g, "-$1").toLowerCase() + ':' + styles[e][el] + ';\n'
                }
            }
        })
        styleText += '}\n'
    })
    const format = beautify_css(styleText)
    fs.writeFileSync(path.join(outFile,'index.less'), format)
}



function tranformWeb (json,outFile) {
    const text = read(json, 0)
    let style = getStyles()
    let box = json.style;
    const newTemplate = template.replace('$$$build$$$', text).replace('$$$styles$$$', style).replace('$$width$$', box.width).replace('$$height$$', box.height)
    const format = prettier.format(newTemplate, { semi: false, parser: "babel" })
    fs.writeFileSync(path.join(outFile,'index.js'), format)

    writeStyle(outFile)
}

module.exports = {
    tranformWeb
}