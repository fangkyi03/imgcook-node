const fs = require('fs');
const axios = require('axios').default
const path = require('path')
const PSD = require('psd')
const co = require('co')
const FormData = require('form-data')
const tranFormFlutter = require('./tranFlutter').tranForm
const tranFormWeb = require('./tranformWeb').tranformWeb
const tranformTaro = require('./tranformTaro').tranformTaro
const qs = require('qs');
const { execSync } = require('child_process');

var mScanDirectory = '';
var mOutDirectory = {};

var mImgUpload = 'https://imgcook.taobao.org/api/upload-img?ctoken=a69pmX6U-748x5IceepDgaBvKIeGn_jSEgvc&img2code'
var mImageScan = 'https://imgcook.taobao.org/api/img2json-next'
var mImageEnd = 'https://imgcook.taobao.org/api/img2json-next'
var mLayoutProcess = 'https://imgcook.taobao.org/api/gen-layout-process'

var mScanList = [];
var mPostUrl = [];
var mPostJson = [];

var mCtoken = 'Y5OuW5iN-wwc-6BiL1K_5o4iQUjE_RNESr50';
var mCookie = 'EGG_SESS_DAVINCI=B8G5XPvkjePB-ITpJ2Se0cJV9OMYPrHlX5Fuhegay2nQ2V-hLqunk-sSfyky3kNyJxevM4z2HNctA0IwjU6C5u7gv08mbfhEgTLHOGThnDQ=; cna=v+BJFiJ16jkCASe8LnIZR/Tq; ctoken=7G-rmtmpHGk_GlBWbno5xfC6; isg=BNnZ9oFX4ItJPLwemf4v-fPm6MOzZs0YiD8PXvuOcoB_AviUQrQx6aBUAI7RumVQ';

var mNameList = [];
function init({ scanDirectory, outDirectory = { web: '', taro: '', flutter: '' }, ctoken,cookie}) {
    mScanDirectory = scanDirectory
    mOutDirectory = outDirectory
    if (!(!ctoken || !cookie)) {
        mCookie = cookie
        mCtoken = ctoken
    }
}

function savepsd (fileDir) {
    return new Promise((resolve, reject) => {
        PSD.open(fileDir).then((psd) => {
            const tempPath = `./temp/${getFileName(fileDir)}.png`
            mScanList.push(tempPath)
            return psd.image.saveAsPng(path.resolve(tempPath));
        })
        .then(()=>{
            resolve()
        })
    })
}

function getFileName (filePath) {
    return path.basename(filePath).split('.')[0];
}

function *scanFile(filePath) {
    const fileArr = fs.readdirSync(filePath);
    for (let index = 0; index < fileArr.length; index++) {
        const filename = fileArr[index];
        const fileDir = path.join(filePath, filename);
        const fileState = fs.statSync(fileDir);
        if (fileState.isDirectory()) yield scanFile(fileDir);
        if (fileState.isFile()) {
            if (path.extname(fileDir) == '.psd') {
                yield savepsd(fileDir);
            } else if (['.png', '.jpg'].indexOf(path.extname(fileDir)) != -1) {
                mScanList.push(fileDir)
            }
        }
    }
}

function scan() {
    return co(function*(){
        yield scanFile(mScanDirectory);
    })
}

function uploadImage(filePath) {
    const formData = new FormData()
    const data = fs.createReadStream(path.resolve(filePath))
    formData.append('file', data)
    return new Promise((resolve, reject) => {
        axios(mImgUpload,{
            method:'POST',
            data:formData,
            headers:{
                'content-type': `multipart/form-data;boundary=${formData.getBoundary()}`
            }
        })
        .then((e)=>{
            if (e.data.data && e.data.data.url ) {
                resolve(e.data.data.url)
            } else {
                resolve('')
            }
        })
    });
}

function startScan (url) {
    return new Promise((resolve, reject) => {
        const config = {
            headers:{
                cookie: mCookie
            }
        }
        const data = {
            'image': url,
            'ctoken':mCtoken
        }
        axios.post(mImageScan,qs.stringify(data),config)
        .then((e) => {
            if (e.data && e.data.data && e.data.data.taskParam.taskId) {
                resolve(e.data.data.taskParam.taskId)
            }else {
                resolve('')
            }
        })  
    });
}

function endScan (url,taskId) {
    let time;
    return new Promise((resolve, reject) => {
        const config = {
            headers: {
                cookie: mCookie
            }
        }
        const data = {
            'image': url,
            'ctoken': mCtoken,
            'taskId': taskId
        }
        time = setInterval(()=>{
        axios.post(mImageEnd,qs.stringify(data),config)
        .then((e) => {
            if (e.data && e.data.data && e.data.data.result) {
                resolve(e.data.data.result);
                clearInterval(time);
            }
        })
      },1000)
    })
    
}

function tranJson(url,json) {
    const obj = {
        data: JSON.stringify(json),
        original_pic: url,
        options: JSON.stringify({ "useThreshold": true, "combineCols": true, "composeText": true, "adaptSpace": true, "composeRepeat": true, "dirtyFilter": true, "checkUseless": false, "checkShape": false }),
        levelProcess: 1,
        ctoken:mCtoken
    }
    return new Promise((resolve, reject) => {
      axios(mLayoutProcess,{
          method:'POST',
          data: qs.stringify(obj),
          headers: {
            'cookie':mCookie
          }
      })
      .then((e)=>{
        resolve(JSON.parse(e.data.data))
      })
    })
    
}

function *getImageJson (url) {
    const taskId = yield startScan(url)
    const endJson = yield endScan(url,taskId)
    const tranJsonData = yield tranJson(url,endJson)
    return tranJsonData
}

function post() {
    return co(function *() {
        for (let index = 0; index < mScanList.length; index++) {
            const filePath = mScanList[index];
            const url = yield uploadImage(filePath)
            const json = yield getImageJson(url)
            console.log('图片总计:' + mScanList.length + '当前上传完成:' + index)
            if (url) {
                mPostUrl.push(url)
                mPostJson.push(json)
                mNameList.push(getFileName(filePath))
            }
        }
    })
}

function buildFlutter () {
    return new Promise((resolve, reject) => {
        for (let index = 0; index < mPostJson.length; index++) {
            const json = mPostJson[index];
            const outDir = path.join(mOutDirectory['flutter'], mNameList[index])
            const outFile = path.join(outDir, './index.dart')
            console.log('当前flutter完成' + index)
            if (fs.existsSync(outDir)) {
                tranFormFlutter(json, outFile)
                execSync('flutter format ' + outFile)
            } else {
                fs.mkdirSync(outDir)
                tranFormFlutter(json, outFile)
                execSync('flutter format ' + outFile)
            }
        }
        resolve()
    })
}

function buildWeb () {
    return new Promise((resolve, reject) => {
        for (let index = 0; index < mPostJson.length; index++) {
            const json = mPostJson[index];
            const outDir = path.join(mOutDirectory['web'], mNameList[index])
            console.log('当前web完成' + index)
            if (fs.existsSync(outDir)) {
                tranFormWeb(json, outDir)
            } else {
                fs.mkdirSync(outDir)
                tranFormWeb(json, outDir)
            }
        }
        resolve()
    })
}

function buildTaro() {
    return new Promise((resolve, reject) => {
        for (let index = 0; index < mPostJson.length; index++) {
            const json = mPostJson[index];
            const outDir = path.join(mOutDirectory['taro'], mNameList[index])
            console.log('当前taro完成' + index)
            if (fs.existsSync(outDir)) {
                tranformTaro(json, outDir)
            } else {
                fs.mkdirSync(outDir)
                tranformTaro(json, outDir)
            }
        }
        resolve()
    })
}

module.exports = {
    init,
    scan,
    post,
    buildFlutter,
    buildWeb,
    buildTaro
}