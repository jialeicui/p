import React from 'react'
import {inject, observer} from 'mobx-react'
import {get} from "../utils/request";

@inject("player", 'playlist')

@observer
class Progress extends React.Component {
	playNext() {
		const {curList, curPlaying} = this.props.playlist
		if (curPlaying >= curList.length) {
			return
		}

		let id = curList[curPlaying+1].id
		get(`/song/url/${id}`, {}, b => {
			this.props.playlist.setCurPlaying(curPlaying+1)
			this.props.player.play({url: b['data'][0]['url']})
		})
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
			<button>play</button>
			<button onClick={this.playNext.bind(this)}>next</button>
		</div>
	}
}

export default Progress