import React, {Component} from 'react'
import {render} from 'react-dom'

import Route from './routes'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<Route/>
		</div>
	}
}

render(<div><App/></div>,
	document.getElementById('root')
);