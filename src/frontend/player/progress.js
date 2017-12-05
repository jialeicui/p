import React from 'react'
import {inject, observer} from 'mobx-react'

@inject("player", 'playlist', 'likes')

@observer
class Progress extends React.Component {
	playNext() {
		this.props.playlist.playNext()
	}

	playOrPause() {

	}

	like() {
		const {id} = this.props.player.song
		console.log('add', id, this.props.player.song)
		this.props.likes.addLikes(id)
	}

	render() {
		const {player} = this.props
		return <div>
			<input
				type="range"
				min={0}
				max={player.duration}
				value={player.current}
				step={1}
				onChange={null}
			/>
			<button>pre</button>
			<button onClick={this.playOrPause.bind(this)}>play</button>
			<button onClick={this.playNext.bind(this)}>next</button>
			<button onClick={this.like.bind(this)}>like</button>
			<div>{JSON.stringify(this.props.player.detail)}</div>
		</div>
	}
}

export default Progress