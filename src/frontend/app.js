import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'

import Route from './routes'
import store from './store'

class App extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Provider {...store}>
			<Route/>
		</Provider>
	}
}

render(<App/>,
	document.getElementById('root')
);