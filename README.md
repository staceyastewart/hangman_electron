# Our first app built with Electron
![photoOfOurApp](images/startOfGame.png)

We were tasked with learning Electron and building our first app with it over the course of a weekend.

For the docs on Electron please [click here](https://github.com/electron/electron).


First, we set up our repo and then ran the following in our command line: 

```sh
npm init

# Install as a development dependency
npm install electron --save-dev

# Install the `electron` command globally in your $PATH
npm install electron -g
```

You can also run the following (instead of the above):

```
npm init

npm install electron-prebuilt --save-dev
```

We then create a main.js file and wrote the following. We left in the openDevTools line when we were getting started so that the dev tools automatically opened whenever we opened the app.

```
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;


app.on("ready", function(){
  mainWindow = new BrowserWindow({
    width:1300,
    height: 800,
    minWidth:1300,
    minHeight: 800,
    titleBarStyle: 'hidden-inset'
    });
  // mainWindow.webContents.openDevTools();
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
});
```

Then in your package.JSON you need a start script that looks like the following:

```
"start": "electron ."
```

![photoOfOurApp](images/winningGame.png)



