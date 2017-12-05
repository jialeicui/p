'use strict'
import React from 'react'
import {inject, observer} from 'mobx-react'

@inject('player')
@observer class Player extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}

	progressChange(a) {
		// console.log(a)
	}

	timeUpdate(e) {
		this.props.player.updateCurrent(e.target.currentTime)
	}

	loadedMetadata(e) {
		this.props.player.updateDuration(e.target.duration)
	}

	render() {
		const {url} = this.props.player.song
		return <audio
			autoPlay={true}
			src={url}
			onProgress={this.progressChange.bind(this)}
			onTimeUpdate={this.timeUpdate.bind(this)}
			onLoadedMetadata={this.loadedMetadata.bind(this)}
		/>
	}
}

export default Player