import {ipcRenderer} from 'electron'
import {observable, action, computed} from 'mobx'

class Likes {
	@observable likes = {}
	@observable hates = {}

	constructor() {
		ipcRenderer.send('local', {action: 'loadLikes'})
		ipcRenderer.send('local', {action: 'loadhates'})

		ipcRenderer.on('like-reply', (evt, arg) => {
			this.likes.replace(arg)
		})

		ipcRenderer.on('hate-reply', (evt, arg) => {
			this.hates.replace(arg)
		})
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
	addLikes(id, score) {
		this.likes[id] = {...this.likes[id], score}
		ipcRenderer.send('local', {action: 'saveLikes', data: this.likes})
	}

	@action
	addHates(id) {
		ipcRenderer.send('local', {action: 'saveHates', data: this.hates})
	}

	@computed
	isLiked(id) {
		return (id in this.likes)
	}
}

export default Likes

