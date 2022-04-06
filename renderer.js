// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { not } = require("cheerio/lib/api/traversing");
const test = require("./src/Function/Hitomi/Hitomi.js");
const cheerio = require("cheerio");

// const vm = require('vm');

const { ipcRenderer,ipcMain } = require('electron')


window.onload = () => {
    ipcRenderer.on('onWebcontentsValue', (evt, payload) => {
        console.log('data:image/png;base64,'+ payload);
        document.querySelector('.img').src = 'data:image/png;base64,'+ payload;
    })
    ipcRenderer.on('onIndexGetReady', (evt, payload) => {
        console.log(payload)
        payload.forEach(element => {
            node = document.createElement("div");
            node.classList.add("testing");
            document.querySelector('.container').appendChild(node);
        });
    })

    ipcRenderer.on('LoadImage', (evt, payload,index) => {
        console.log(index)
        document.querySelector(`.imageBox.img${index}`).src = 'data:image/png;base64,'+ payload;
    })
    ipcRenderer.on('preLoadImageContainer',(evt, payload)=> {
        let containerCount = payload.files.length;
        payload.files.forEach((element,index) => {
            node = document.createElement("img");
            ratio = element.width / 600;
            
            node.style.height = `${element.height / ratio}px`;
            node.style.width = `600px`;

            node.classList.add("imageBox");
            node.classList.add(`img${index}`);
            document.querySelector('.container').appendChild(node);
        })
    })

}

document.addEventListener('scroll',event => {
    console.log(event )
})