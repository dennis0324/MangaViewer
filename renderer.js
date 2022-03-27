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
    ipcRenderer.on('onIndexGetReady', (evt, payload) => {
        console.log(payload)
        payload.forEach(element => {
            node = document.createElement("div");
            node.classList.add("testing");
            document.querySelector('.container').appendChild(node);
        });
    })


}

document.addEventListener('scroll',event => {
    console.log(event )
})