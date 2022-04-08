
const { BrowserWindow,app, ipcMain } = require('electron'); 
import dataRequest from '../module/Request/Request'
const dtRequest = new dataRequest();
const path = require('path');
const env = process.env.NODE_ENV || 'development';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundCoor: "white",
    webPreferences: {
      NodeIterator: false,
      worldSafeExecuteJavascript : true,
      contextIsolation: true,
      preload : path.resolve(path.join(__dirname, "preload.js"))
    }
  })

  win.loadFile('index.html');
}

ipcMain.on('MainPageLoad',async (evt,payload) => {
  let responseData = await dataRequest.site.Hitomi.getIndex();
  evt.reply("indexDataSend",responseData)
})

// If development environment 
if (env === 'development') {
  require('electron-reload')(path.join(__dirname,'..','..'), {
      electron: path.join(__dirname,'..','..','node_modules','electron')
  });
}

app.whenReady().then(createWindow)