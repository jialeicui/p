const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path')
const url = require('url')
const like = require('./src/local/like')

import api from './src/server/index'

let win

function createWindow() {
	win = new BrowserWindow({width: 900, height: 500})

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'src/frontend/index.html'),
		protocol: 'file:',
		slashes: true
	}))

	// win.webContents.openDevTools()
	// win.setAlwaysOnTop(true, 'floating')

	ipcMain.on('local', (evt, args) => {
		console.log(args)
		switch (args.action) {
			case 'loadLikes':
				evt.sender.send('like-reply', like.loadLikes())
				break
			case 'loadHates':
				evt.sender.send('hate-reply', like.loadHates())
				break
			case 'saveLikes':
				like.saveLikes(args.data)
				break
			case 'saveHates':
				like.saveHates(args.data)
				break
		}
	})
}

api.listen(7778)
app.setName("ppp")
app.on('ready', createWindow)

