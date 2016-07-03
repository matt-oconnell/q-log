import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav'

const Main = React.createClass({
	render() {
		return (
			<div>
				<Nav {...this.props} />
				<h1>
					<Link to="/">Heyo!!!</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;
