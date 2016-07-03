import React from 'react';
import { Link } from 'react-router';

import Nav from './Nav'
import Status from './Status'

const Main = React.createClass({
	render() {
		return (
			<div>
				<div className="left">
					<Nav {...this.props} />
					{React.cloneElement(this.props.children, this.props)}
				</div>
				<div className="right">
					<Status {...this.props}/>
				</div>
			</div>
		)
	}
});

export default Main;
