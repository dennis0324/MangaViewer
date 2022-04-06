// const cheerio = require("cheerio");
// const axios = require("axios");
// const randomUseragent = require('random-useragent');
// const ua = randomUseragent.getRandom();

// function Hitomi(path:string, extension: string){
//   this.headers = {
//     'User-Agent':randomUseragent.getRandom(),
//     'Referer':'https://hitomi.la/',
//     'Content-Type': 'application/json;charset=UTF-8',
//   }  

//   this.Extension = {
//     READER: '.html',
//     INDEX: '.nozomi',
//     JAVASCRIPT : '.js'
//   }

//   this.requestData = {
//     method: 'GET',
//     responeEncoding : 'binary',
//     responseType : 'arraybuffer',
//     headers : this.headers
//   }

//   this.makeURL = Hitomi.bind(this.data);
//   return `${this.protocal}//${this.url}/${path}${extension}`
  
// }

// Hitomi.prototype.toArrayBuffer = function(buffer){
//   return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)
// }

// Hitomi.prototype.bind = function(data){
//   const self = this.bind

//   return function(path,extension) {
//     return self.apply(data,path,extension)
//   }
// }

// Hitomi.prototype.getDataIndex = async function name(url:string) {
//   let nozomi:number[] = []
//   this.requestData.url = url
//   let response = await axios.request(this.requestData)

//   let arrayBuffer:ArrayBuffer = this.toArrayBuffer(response.data)
//   if(arrayBuffer) {
//     var view = new DataView(arrayBuffer);
                
//     let total:Number = view.byteLength/4;
//     for (var i = 0; i < total; i++) {
//             nozomi.push(view.getInt32(i*4, false /* big-endian */));
//     } 
//   }
// }

// Hitomi.prototype.getRequest = async function(url){
//   this.requestData.url = url
//   const data = await axios.request(this.requestData)

//   return data
// }

// Hitomi.prototype.getIndex =async function(first = 1, second = 25){
//   let byteFirst:number = (first - 1) * 4 
//   let byteSecond:number = (second - first + 1) * 4 - 1 

//   this.headers.Range = `bytes=${byteFirst}-${byteSecond}`
//   this.requestData.responseEncoding = 'binary'
//   this.requestData.responseType = 'arraybuffer'

//   let url:string = this.makeURL("index-all",this.Extension.INDEX)
//   let index = await this.getDataIndex(url)
//   return index
// }

// Hitomi.prototype.getGalleryInfo = async function(galleryNum:number){
//   let url:string = this.makeURL(`galleries/${galleryNum}`,this.Extension.JAVASCRIPT)
//   let index = await this.getRequest(url)
//   return index.data.toString()
// }

// Hitomi.prototype.getGalleryBlock = async function(galleryNum:number){

//   let url:string = this.makeURL(`galleryblock/${galleryNum}`,this.Extension.READER)
//   let index = await this.getRequest(url)
//   return index.data.toString()
// }

// Hitomi.prototype.getGalleryImg = async function(url) {
//   const ua = randomUseragent.getRandom();
//   const data = await axios.request({
//           url: url,
//           method: 'GET',
//           responseType : 'arraybuffer',
//           responseEncoding : 'binary',
//           headers : { //basic header for request
//                   "User-Agent": ua,
//                   'Referer': 'https://hitomi.la/',
//           }
//   })
//   return data
// }

// Hitomi.prototype.testingNew = async function() {
//   const ua = randomUseragent.getRandom();
//   const data = await axios.request({
//           url: "https://hentaiera.com/?page=4",
//           method: 'POST',
//           // responseType : 'arraybuffer',
//           // responseEncoding : 'binary',
//           headers : { //basic header for request
//                   "User-Agent": ua,
//                   // 'Referer': 'https://hitomi.la/',
//           }
//   })
//   return data
// }

// exports.Hitomi = Hitomi;

