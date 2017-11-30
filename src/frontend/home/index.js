import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {get} from '../utils/request'

@inject('player', 'playlist')

@observer
class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount(){}

	componentDidMount() {
		get('/hot/playlist', {}, (r, e, b) => {
			this.props.playlist.update(JSON.parse(b)['playlists'])
		})
	}

	play(pid) {
		get(`/playlist/${pid}`, {}, (r, e, b) => {
			let playlist = JSON.parse(b)['playlist']['tracks']
			let songId = playlist[0].id
			get(`/song/url/${songId}`, {}, (r, e, b) => {
				this.props.player.play({url: JSON.parse(b)['data'][0]['url']})
			})
			get(`/song/${songId}`, {}, (r, e, b) => {
				// console.log(b)
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
		</div>
	}
}

export default Home