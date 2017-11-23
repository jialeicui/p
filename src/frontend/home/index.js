import React, {Component} from 'react'
import {get} from '../utils/request'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			playlists: [],
		}
	}

	componentDidMount(props) {
		get('/hot/playlist', {}, (r, e, b) => {
			this.setState({
				playlists: JSON.parse(b)['playlists']
			})
		})
	}

	renderPlaylists(pls) {
		return pls.map(p=>{
			return <li key={p.id}>{p.name} [{p.tags.join('/')}]</li>
		})
	}

	render() {
		console.log(this.state.playlists)
		return <div>{this.renderPlaylists(this.state.playlists)}</div>
	}
}

export default Home