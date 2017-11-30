import React, {Component} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import {observer} from 'mobx-react'

import Home from './home'
import Playlist from './playlist'
import Layout from './layout'

@observer
class routes extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <Router>
			<Layout>
				<div>
					<Route path="/" component={Home}/>
					<Route path="/playlist/:type" component={Playlist}/>
				</div>
			</Layout>
		</Router>
	}
}


export default routes