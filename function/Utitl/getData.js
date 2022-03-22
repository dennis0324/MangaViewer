// const cheerio = require("cheerio");
// const https = require("https");

// var XMLHttpRequest = require('xhr2');

// const request = require("request");

// import axios from 'axios'
const axios = require("axios");
const randomUseragent = require('random-useragent');
const ua = randomUseragent.getRandom();
//basic function for prototype
function Hitomi (path,extension) {
        this.headers = { //basic header for request
                "User-Agent": ua,
                'Referer': 'https://hitomi.la/',
                'Content-Type': 'text/plain; charset=ISO-8859-15'
        }

        this.Extension = { //storing data of extension
                READER : '.html',
                INDEX : '.nozomi',
                JAVASCRIPT : '.js'

        }

        this.data = { 
                protocal: 'https:',
                url : 'ltn.hitomi.la'
        }

        this.requestData = {
                method: 'GET',
                responseType: 'arraybuffer',
                headers : this.headers
        }
        
        this.makeURL = Hitomi.bind(this.data);
        return `${this.protocal}//${this.url}/${path}${extension}`
};

Hitomi.prototype.bind = function(data){
        const self = this.bind
        
        return function(path,extension) {
                return self.apply(data,path,extension)
        }
}

//extension = .html .nozoi .js
//.html and .js don't need binary
//make dictionary in main function
Hitomi.prototype.getDataIndex = async function(url){
        
        var nozomi = []
        function toArrayBuffer(buffer) {
                return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
        }
        this.requestData.url = url
        let response =  await axios.request(this.requestData)
        
        var arrayBuffer = toArrayBuffer(response.data); // Note: not oReq.responseText
        if (arrayBuffer) {
                var view = new DataView(arrayBuffer);
                
                var total = view.byteLength/4;
                for (var i = 0; i < total; i++) {
                        nozomi.push(view.getInt32(i*4, false /* big-endian */));
                }

                total_items = response.headers['content-range'].replace(/^[Bb]ytes \d+-\d+\//, '') / 4
        }

        return {nozomi,total_items}
}

Hitomi.prototype.getRequest = async function(url){
        this.requestData.url = url
        const data = await axios.request(this.requestData)

        return data
        // console.log(JSON.parse(response.data.toString()));
}


Hitomi.prototype.getIndex =async function(first = 1, second = 25){
        let byteFirst = (first - 1) * 4 
        let byteSecond = (second - first + 1) * 4 - 1 

        this.headers.Range = `bytes=${byteFirst}-${byteSecond}`
        this.requestData.responseEncoding = 'binary'

        let url = this.makeURL("index-all",this.Extension.INDEX)
        let index = await this.getDataIndex(url)
        return index
}

Hitomi.prototype.getGalleryInfo = async function(galleryNum){
        this.requestData.responseEncoding = ''
        let url = this.makeURL(`galleries/${galleryNum}`,this.Extension.JAVASCRIPT)
        index = await this.getRequest(url)
        return index
}
exports.Hitomi = Hitomi;
