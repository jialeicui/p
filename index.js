const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

import api from './src/server/index'

let win

function createWindow() {
	win = new BrowserWindow({width: 400, height: 300})

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'src/frontend/index.html'),
		protocol: 'file:',
		slashes: true
	}))

	// win.webContents.openDevTools()
	// win.setAlwaysOnTop(true, 'floating')
}

api.listen(7778)
app.setName("ppp")
app.on('ready', createWindow)

