import React, {Component} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


import Home from './home'
import Playlist from './playlist'
import Layout from './layout'

const routes = () => <Router>
	<Layout>
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/playlist/:type" component={Playlist}/>
		</div>
	</Layout>
</Router>


export default routes