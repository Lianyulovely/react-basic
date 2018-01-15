import config from '../config';

const Net = {
  post: post,
  upload: upload
}

//上传文件
async function upload(url,data,dispatch){
  let formData = new FormData();
  let file = {uri: data.file, type: 'multipart/form-data',name:new Date().getTime()+data.accid+".jpg"};

  formData.append("file",file);
  formData.append("accid",data.accid);
  formData.append("sign",data.sign);
  formData.append("deviceID",data.deviceID);
  try {
    // dispatch(showLoading());
    let response = await fetch(formatUrl(url),{method: 'POST',headers: {  'Content-Type':'multipart/form-data' },body:formData});
    // dispatch(hideLoading());

    let result = await response.json();

    if(result.ret == 1){
      return await result;
    }else{
      if(result.info.desc != undefined){
        _showNotify(dispatch, result.info.desc==""?"操作错误!":result.info.desc);
      }
      return await result;
    }
  }catch(error) {
    _showNotify(dispatch, "网络出错，请稍后再试！");
  }
}

//post接口请求
async function post(url,data) {
  let t;
  try {
    // clearTimeout(t);
    // t = setTimeout( function(){
    //   clearTimeout(t);
    // },10000)
    let response = await fetch(formatUrl(url),formatParameter(data));
    // clearTimeout(t);
    let result = await response.json();
    if(result.code == 401){
        window.location.href="#";
        return false;
    }
    return await result;
  } catch(error) {
    clearTimeout(t);
    // return await {ret:0,info:{desc:""}};
    // _showNotify(dispatch, "网络出错，请稍后再试！");
  }
}

function  _showNotify(dispatch,text){
  // dispatch(showNotify(text));
  let t = setTimeout(function(){
    // dispatch(hideNotify());
    clearTimeout(t);
  },1500)
}

function formatUrl(path){
  return 'http://'  +  config.Host  +  ':' + config.Port + path;
}

function formatParameter(data){
  return {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    credentials: "include",
    body: parserData(data)
  }
}

function parserData(data){
  let returnStr = "";
  for (let key in data){
    returnStr += key + '=' +data[key] + '&'
  }
  return returnStr.substring(0,returnStr.length-1);
}

module.exports = Net;
