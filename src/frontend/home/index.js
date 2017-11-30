import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {get} from '../utils/request'

import Progress from '../player/progress'

@inject('player', 'playlist')

@observer
class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		get('/hot/playlist', {}, b => {
			this.props.playlist.update(b['playlists'])
		})
	}

	play(pid) {
		this.props.playlist.select(pid)
		get(`/playlist/${pid}`, {}, b => {
			let playlist = b['playlist']['tracks']
			this.props.playlist.setCurTracks(playlist)
			let songId = playlist[0].id
			get(`/song/url/${songId}`, {}, b => {
				this.props.playlist.setCurPlaying(0)
				this.props.player.play({url: b['data'][0]['url']})
			})
		})

	}

	renderPlaylists(pls) {
		return pls.map(p => {
			return <li key={p.id}>
				<a href="#" onClick={() => this.play(p.id)}>{p.name}</a>
				<span>[{p.tags.join('/')}]</span>
			</li>
		})
	}

	render() {
		return <div>
			{this.renderPlaylists(this.props.playlist.lists)}
			<Progress/>
		</div>
	}
}

export default Home