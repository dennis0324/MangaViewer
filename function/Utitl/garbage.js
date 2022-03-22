// request({
//         // url: 'https://ltn.hitomi.la/galleryblock/2167973.html',
//         url: 'https://'+domain+'/languagesindex/version?_='+(new Date).getTime(),

//         headers: {
//                 "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit 537.36 (KHTML, like Gecko) Chrome",
//                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//                 'Referer': 'https://hitomi.la/',
//                 'Range': 'bytes=0-463',

//                 // 'accept-lnguage': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
//         }
// },(error,response,body) => {
//         console.log(response.statusCode)
//         if(!error && (response.statusCode === 200 ||response.statusCode === 206)){
//                 console.log(response);
                
//         }
//         else{
//                 console.warn(response)
//         }
// })
// request({
//         // url: 'https://ltn.hitomi.la/galleryblock/2167973.html',
//         url: 'https://ltn.hitomi.la/index-all.nozomi',
//         // url : 'https://ltn.hitomi.la/gg.js?_=1647493894471',
//         responseType: 'arraybuffer',
//         responseEncoding: 'binary',
//         headers: {
//                 "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit 537.36 (KHTML, like Gecko) Chrome",
//                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
//                 'Referer': 'https://hitomi.la/',
//                 'Range': 'bytes=0-463',
//                 'Content-Type': 'text/plain; charset=ISO-8859-15'
//                 // 'accept-lnguage': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'
//         }
// },(error,response,body) => {
//         // console.log(response.statusCode)
//         if(!error && (response.statusCode === 200 ||response.statusCode === 206)){
//                 console.log(response);
//                 var dataView = new DataView(body);

//                 // console.log(arrayBuffer);
//                 // if (arrayBuffer) {
//                 //         var view = new DataView('b'+response.body);
                        
//                 //         var total = view.byteLength/4;
//                 //         for (var i = 0; i < total; i++) {
//                 //                 nozomi.push(view.getInt32(i*4, false /* big-endian */));
//                 //         }
//                 //         // total_items = parseInt(xhr.getResponseHeader("Content-Range").replace(/^[Bb]ytes \d+-\d+\//, '')) / 4;
//                 //         console.log(nozomi);
//                 // }

                
//         }
//         else{
//                 console.warn(response)
//         }
// })

// class Hitomi{
//         constructor(){
//                 this.totalurl = "";
//                 this.protocal='https://'
//                 this.ltn = "ltn.hitomi.la"
//                 this.path ="/"
//         }
//         setProtocal() {
//                 this.url += this.protocal;
//                 return this
//         }

//         setProtocal(url){
//                 this. protocal = url
//                 this.url += this.protocal;
//                 return this
//         }

//         url() {
//                 this.url += this.ltn
//                 return this
//         }

//         getUrl() {
//                 return this.totalurl
//         }
// }


