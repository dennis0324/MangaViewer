// export= {}
const cheerio = require("cheerio");
const axios = require("axios");
const randomUseragent = require('random-useragent');
const ua = randomUseragent.getRandom();

const Hitomi = function(protocal:string,url:string){
  this.protocal = protocal;
  this.url = url;
  this.headers = {
    'User-Agent':randomUseragent.getRandom(),
    'Referer':'https://hitomi.la/',
    // 'Content-Type': 'application/json;charset=UTF-8',
  }  
  
  this.Extension = {
    READER: '.html',
    INDEX: '.nozomi',
    JAVASCRIPT : '.js'
  }

  this.requestData = {
    method: 'GET',
    responeEncoding : 'binary',
    responseType : 'arraybuffer',
    headers : this.headers
  }
}
Hitomi.prototype.makeURL = function(path:string,extension:string){
  return `${this.protocal}//${this.url}/${path}${extension}`
}
const toArrayBuffer = function(buffer) {
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
Hitomi.prototype.getRequest = async function(url){
  this.requestData.url = url
  const data = await axios.request(this.requestData)
  return data
}



Hitomi.prototype.getIndexs =async function(first:number = 1, second:number = 25){
  let byteFirst:number = (first - 1) * 4 
  let byteSecond:number = (second - first + 1) * 4 - 1 

  this.headers.Range = `bytes=${byteFirst}-${byteSecond}`
  this.requestData.responseEncoding = 'binary'
  this.requestData.responseType = 'arraybuffer'

  let url:string = this.makeURL("index-all",this.Extension.INDEX)
  let index = await this.getIndex(url)
  return index
}
//getting array of index
Hitomi.prototype.getIndex = async function(url){
        
  var nozomi = []
  this.requestData.url = url
  // console.log(this.requestData)
  let response =  await axios.request(this.requestData)
  
  var arrayBuffer = toArrayBuffer(response.data); // Note: not oReq.responseText
  if (arrayBuffer) {
          var view = new DataView(arrayBuffer);
          
          var total = view.byteLength/4;
          for (var i = 0; i < total; i++) {
                  nozomi.push(view.getInt32(i*4, false /* big-endian */));
          } 
  }

  return {nozomi,total}
}

//lazy image 있는 곳
Hitomi.prototype.getGalleryInfo = async function(galleryNum:number){
  let url:string = this.makeURL(`galleries/${galleryNum}`,this.Extension.JAVASCRIPT)
  let index = await this.getRequest(url)
  return index.data.toString()
}

Hitomi.prototype.getGalleryImg = async function(url) {
  const ua = randomUseragent.getRandom();
  this.requestData.url = url
  const data = await axios.request(this.requestData)
  return data
}

exports.Hitomi = Hitomi;


