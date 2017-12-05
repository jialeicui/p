const fs = require('fs-extra')
const path = require('path')

const WORK_DIR = '.p'
const LIKE_FILE = 'likes.json'
const HATE_FILE = 'hates.json'

let likes = {}

function getUserHome() {
	return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}

function makeSureDir(dir) {
	dir = path.join(getUserHome(), dir || WORK_DIR)
	fs.ensureDirSync(dir)
	return dir
}

function saveToFile(f, data) {
	const dir = makeSureDir()
	const file = path.join(dir, f)
	fs.writeJsonSync(file, data)
	console.log("write", data)
}

function loadFromFile(f) {
	const dir = makeSureDir()
	const file = path.join(dir, f)
	const data = fs.readJsonSync(file, {throws: false})
	console.log(data)
	return data
}

likes.saveLikes = (data) => {
	return saveToFile(LIKE_FILE, data)
}

likes.loadLikes = () => {
	return loadFromFile(LIKE_FILE)
}

likes.loadHates = () => {
	return loadFromFile(HATE_FILE)
}

likes.saveHates = (data) => {
	return saveToFile(HATE_FILE, data)
}

module.exports = likes