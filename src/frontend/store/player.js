import {observable, action} from 'mobx'
import {get} from 'utils/request'

class Player {
	@observable song = {}
	@observable current = 0
	@observable duration = 9999999
	@observable detail = null

	hooks = []

	@action
	async play(song) {
		this.song = song
		const {id} = song
		const {songs} = await get(`song/${id}`)
		this.detail = songs[0]
	}

	@action
	updateCurrent(c) {
		this.current = c
		if (c >= this.duration) {
			this.hooks.forEach(fn => fn())
		}
	}

	@action
	updateDuration(d) {
		this.duration = d
	}

	regHook(fn) {
		this.hooks.push(fn)
	}
}

export default new Player()