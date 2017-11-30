import {observable, action} from 'mobx'

class Playlist {
	@observable lists = []

	@action
	update(pls) {
		console.log(pls)
		this.lists = pls
	}
}

export default new Playlist()