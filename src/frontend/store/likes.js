import {ipcRenderer} from 'electron'
import {observable, action} from 'mobx'

class Likes {
	@observable likes = []
	@observable hates = []

	constructor() {
		this.likes = ipcRenderer.send('local', {action: 'loadLikes'}) || []
		this.hates = ipcRenderer.send('local', {action: 'loadhates'}) || []
	}

	@action
	setLikes(likes) {
		this.likes = likes
	}

	@action
	setHates(hates) {
		this.hates = hates
	}

	@action.bound
	addLikes(id) {
		this.likes.push(id)
		console.log(this.likes.slice())
		ipcRenderer.send('local', {action: 'saveLikes', data: this.likes.slice()})
	}

	@action
	addHates(id) {
		this.hates.push(id)
		ipcRenderer.send('local', {action: 'saveHates', data: this.hates})
	}
}

export default Likes

