// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const request = require("request");

const test = require("./function/Utitl/getData.js");
const {hub} = require("./function/Utitl/testing")
const Hitomi = test.Hitomi
const hitomi = new Hitomi();

// const {Hitomi} = require('./function/Utitl/getData')
async function data(mainWindow){
  
  let index = await hub.testing()
  // var hash =  await hitomi.getGalleryImg('https://aa.hitomi.la/webp/1648386001/2098/0686a453a465a4b71da5aacc531820a04e0c23d20842bab4a51981ac861b0328.webp')
  // mainWindow.webContents.send('onWebcontentsValue', hash.data.toString('base64'))
  mainWindow.webContents.send('onIndexGetReady',index)
}
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration : true,
      contextIsolation: false,
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  mainWindow.webContents.on('did-finish-load', (evt) => {
    console.log("testing");
    // onWebcontentsValue 이벤트 송신
    data(mainWindow)
  })
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
