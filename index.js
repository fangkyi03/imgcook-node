const fs = require('fs');
const axios = require('axios').default
const path = require('path')
const PSD = require('psd')
const co = require('co')
const FormData = require('form-data')
const tranFormFlutter = require('./tranFlutter').tranForm
const qs = require('qs');
const { execSync } = require('child_process');

var mScanDirectory = '';
var mOutDirectory = {};

var mImgUpload = 'https://imgcook.taobao.org/api/upload-img?ctoken=a69pmX6U-748x5IceepDgaBvKIeGn_jSEgvc&img2code'
var mImageScan = 'https://imgcook.taobao.org/api/img2json-next?image='
var mImageEnd = 'https://imgcook.taobao.org/api/img2json-next?image='
var mLayoutProcess = 'https://imgcook.taobao.org/api/gen-layout-process'

var mScanList = [];
var mPostUrl = [];
var mPostJson = [];

function init(scanDirectory,outDirectory = {web:'',taro:'',flutter:''}) {
    mScanDirectory = scanDirectory
    mOutDirectory = outDirectory
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
        console.log('输出图片', mScanList)
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
        axios.get(mImageScan + url)
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
       time = setInterval(()=>{
        axios.get(mImageEnd + url + '&taskId=' + taskId)
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
        ctoken:'C1bKhV8I-O39uA0KR6-T-T2cux8QfCjh_gXc'
    }
    return new Promise((resolve, reject) => {
      axios(mLayoutProcess,{
          method:'POST',
          data: qs.stringify(obj),
          headers: {
            'cookie':'EGG_SESS_DAVINCI=B8G5XPvkjePB-ITpJ2Se0cJV9OMYPrHlX5Fuhegay2no3dOgxCvP64pvvBdgz7RuiTUY-6J8pvoDPvvXeAaNoPvCoJu9SVyzOdox7N8cqkM=; cna=NIk8Fm52VmUCASe5dnDfPW3z; ctoken=d6z1_WxDBKu-rGDUXhunoTYx; isg=BEVFuyGVtHI58pCtLG482FP5VIe_pfzRnCCmzUeqD3yL3mRQDlEOZSbw7EqNnhFM',
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
            if (url) {
                mPostUrl.push(url)
                mPostJson.push(json)
            }
        }
    })
}

function buildFlutter () {
    for (let index = 0; index < mPostJson.length; index++) {
        const json = mPostJson[index];
        tranFormFlutter(json, path.resolve('./index.dart'))
        execSync('flutter format ' + path.resolve('./index.dart'))
    }
}

module.exports = {
    init,
    scan,
    post,
    buildFlutter
}