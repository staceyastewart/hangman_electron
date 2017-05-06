const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;


app.on("ready", function(){
  mainWindow = new BrowserWindow({
    width:1300,
    height: 800,
    minWidth:700,
    titleBarStyle: 'hidden-inset'
    });
  // mainWindow.webContents.openDevTools();
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});
