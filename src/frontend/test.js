import React, {Component} from 'react'

class Foo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'dddd',
		}
	}

	render() {
		return <div>{this.state.text}</div>
	}
}

export default Foo