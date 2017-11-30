'use strict'
import { observable, action } from 'mobx'

class Player {
	@observable song = {}
	@observable current = 0
	@observable duration = 9999999

	@action.bound
	play(song) {
		console.log(song)
		this.song = song
	}

	@action.bound
	updateCurrent(c) {
		this.current = c
	}

	@action.bound
	updateDuration(d) {
		this.duration = d
	}
}

export default new Player()