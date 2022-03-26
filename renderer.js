// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { not } = require("cheerio/lib/api/traversing");
const test = require("./function/Utitl/getData.js");
const cheerio = require("cheerio");

// const vm = require('vm');

const { ipcRenderer } = require('electron')


window.onload = () => {
    ipcRenderer.on('onWebcontentsValue', (evt, payload) => {
        console.log('data:image/png;base64,'+ payload);
        document.querySelector('.img').src = 'data:image/png;base64,'+ payload;
    })
    
}


// const test = require("./function/Utitl/getData.js");
// var Hitomi = test.Hitomi
// const hitomi = new Hitomi();
// // var img = document.querySelector('.img');
// var hash = hitomi.getGalleryImg('https://aa.hitomi.la/webp/1648220402/2684/7cc580b612295d527d26cc72972b31a3772788428ec518796631f9d81ce1d7ca.webp')
// // img.setAttribute('src','data:image/png;base64,'+ hash);
// console.log(hash);


// let jsonTemp ={
//     width: 2560,
//     name: '01.png',
//     hasavif: 1,
//     hash: '7cc580b612295d527d26cc72972b31a3772788428ec518796631f9d81ce1d7ca',
//     haswebp: 1,
//     height: 3613
// }



// img.classList.add('lillie');

// async function getImg(){
//     const hitomi = new Hitomi;

//     const response = await hitomi.getGalleryImg('https://aa.hitomi.la/avif/1648191602/1832/bd24c5d559313a8895b90d79d85d5086e0203686a88d7689b8ea185c295c6287.avif');
//     console.log(response.data);
//     img.src = "https://aa.hitomi.la/avif/1648191602/1832/bd24c5d559313a8895b90d79d85d5086e0203686a88d7689b8ea185c295c6287.avif"

//     // const 
    
// }