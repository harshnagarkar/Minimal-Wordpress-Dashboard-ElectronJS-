const { app, Browserwindow } = require('electron')
const os = require('os');
const fs = require('fs');
var emptyurl = false;
fs.readFile('settings.json', (err, data) => {
    if (err) {
        var durl = { 'dashboardurl': "" }
        let dd = JSON.stringify(durl);
        fs.writeFileSync('student-2.json', dd);
    }
    console.log(data);
    var dd = JSON.parse(data);
    console.log(dd['dashboardurl'];
    if(dd['dashboardurl'] == ""){
        emptyurl=true;
    }
});

let win1;
function inputURL() {
    win1 = new Browserwindow({
        width: 1024,
        heeight: 760,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win1.loadFile('inputUrl.html');
    contents = win1.contents;
    console.log(contents);
    win1.on('closed', () => {
        win1 = null
    })

}


let win2;
function createwindow() {
    win2 = new Browserwindow({
        width: 1024,
        height: 760,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win2.loadURL('http://diysuniverse.com/wp-admin')
    contents = win2.webContents
    // console.log(contents)

    win2.on('closed', () => {
        win2 = null
    })
}

if(!emptyurl){
app.on('ready', createwindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win2 === null) {
        createwindow()
    }
})
}else{
    app.on('ready', inputURL)
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
    app.on('activate', () => {
        if (win1 === null) {
            createwindow()
        }

})
}
