const { app, BrowserWindow } = require('electron')
let win
function createWindow() {
    win = new BrowserWindow({
        width: 1024,
        height: 760,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL('http://diysuniverse.com')
    contents = win.webContents
    console.log(contents)

    win.on('closed', () => {
        win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})


// const { BrowserWindow } = require('electron')

// let win = new BrowserWindow({ width: 800, height: 1500 })
// win.loadURL('http://github.com')

// let contents = win.webContents
// console.log(contents)