import React, {Component} from 'react'
import {get} from '../utils/request'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			playlists: [],
			cursong: {},
		}
	}

	componentDidMount(props) {
		get('/hot/playlist', {}, (r, e, b) => {
			this.setState({
				playlists: JSON.parse(b)['playlists']
			})
		})
	}

	play(pid) {
		get(`/playlist/${pid}`, {}, (r, e, b) => {
			let playlist = JSON.parse(b)['playlist']['tracks']
			let songId = playlist[0].id
			get(`/song/url/${songId}`, {}, (r, e, b) => {
				this.setState({
					cursong: {url: JSON.parse(b)['data'][0]['url']}
				})
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
			<audio autoPlay={true} src={this.state.cursong.url}/>
			{this.renderPlaylists(this.state.playlists)}
		</div>
	}
}

export default Home