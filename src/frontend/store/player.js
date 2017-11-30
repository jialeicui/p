'use strict'
import { observable, action } from 'mobx'

class Player {
	@observable song = {}

	@action.bound
	play(song) {
		console.log(song)
		this.song = song
	}
}

export default new Player()