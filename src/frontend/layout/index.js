import React from 'react'
import {inject,observer} from 'mobx-react'
import Player from '../player'

@inject('player')
@observer
class Layout extends React.Component {
	constructor(props){
		super(props)
	}
	componentWillMount(){}
	render() {
		const {player} = this.props
		console.log(player)
		return <div><Player/>{this.props.children}</div>
	}
}

export default Layout