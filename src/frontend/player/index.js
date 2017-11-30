'use strict'
import React from 'react'
import {inject, observer} from 'mobx-react'

@inject('player')
@observer class Player extends React.Component {
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}
	render() {
		const {url} = this.props.player.song
		console.log(this.props.player.song)
		return <audio autoPlay={true} src={url}/>
	}
}

export default Player