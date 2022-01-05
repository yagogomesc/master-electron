//Modules
const { BrowserWindow } = require("electron");

// Offscreen BrowserWindow
let offscreenWindow;

module.exports = (url, callback) => {
  // Create offscren window
  offscreenWindow = new BrowserWindow({
    width: 500,
    height: 500,
    show: false,
    webPreferences: {
      offscreen: true,
    },
  });

  // Load item url
  offscreenWindow.loadURL(url);

  offscreenWindow.webContents.on("did-finish-load", (e) => {
    let title = offscreenWindow.getTitle();

    offscreenWindow.webContents.capturePage().then((image) => {
      let screenshot = image.toDataURL();

      callback({ title, screenshot, url });

      offscreenWindow.close();
      offscreenWindow = null;
    });
  });
};
