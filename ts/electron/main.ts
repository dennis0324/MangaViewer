const { BrowserWindow,app } = require('electron'); 
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

// If development environment 
if (env === 'development') {
  require('electron-reload')(path.join(__dirname,'..','..'), {
      electron: path.join(__dirname,'..','..','node_modules','electron')
  });
}
app.whenReady().then(createWindow)