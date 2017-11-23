import React, {Component} from 'react';
import {render} from 'react-dom';

import Foo from './test'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return <div><Foo/></div>
	}
}

render(<div><App/></div>,
	document.getElementById('root')
);