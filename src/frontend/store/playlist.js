import {observable, action} from 'mobx'

class Playlist {
	@observable lists = []
	@observable cur = null
	@observable curList = []
	@observable curPlaying = 0

	@action.bound
	update(pls) {
		this.lists = pls
	}

	@action.bound
	select(id) {
		this.cur = id
	}

	@action.bound
	setCurTracks(tracks) {
		this.curList.replace(tracks)
	}
	@action.bound
	setCurPlaying(i) {
		this.curPlaying = i
	}
}

export default new Playlist()