const { ipcRenderer, contextBridge} = require('electron');
window.addEventListener('load',() => {
  console.log("load")
  ipcRenderer.send('MainPageLoad',"");

})
contextBridge.exposeInMainWorld('electron',{
  notificationApi : {
    sendNotification(message){
      console.log(message)
      ipcRenderer.send('notify',message);
    },
  }
})

ipcRenderer.on("indexDataSend",(evt,message) => {
  console.log(message);
  
})