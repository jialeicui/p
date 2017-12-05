import {observable, action} from 'mobx'
import {get} from 'utils/request'

class Playlist {
	@observable lists = []
	@observable cur = null
	@observable curList = {}
	@observable curPlaying = 0
	@observable song = null

	constructor(song) {
		this.song = song
		this.song.regHook(()=>this.playNext())
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

	@action
	playNext(fromStart) {
		if(fromStart) {
			this.curPlaying = -1
		}
		this.curPlaying++

		const {trackIds} = this.curList
		if(this.curPlaying >= trackIds.length) {
			this.curPlaying = 0
		}

		let songId = trackIds[this.curPlaying].id
		this.getSongDetail(songId)
	}

	async getSongDetail(id) {
		let resp = await get(`/song/url/${id}`)

		this.song.play(resp.data[0])

	}

	@action
	async loadHotPlaylists() {
		let p = await get('/hot/playlist')
		this.lists.replace(p.playlists)
	}

	@action
	async loadPlaylist(id) {
		let resp = await get(`/playlist/${id}`)
		this.curList = resp.playlist
		return this.curList
	}

	@action
	async playThisList(id) {
		await this.loadPlaylist(id)
		this.playNext(true)
	}
}

export default Playlist