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
		this.props.playlist.loadHotPlaylists()
	}

	play(pid) {
		const {playlist} = this.props
		playlist.playThisList(pid)
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