import React from 'react';

const Quiz = React.createClass({
	render() {
		const { questions } = this.props 
		return (
			<div>
				<h1>Quiz!</h1>
				<p>It will go here...</p>
			</div>
		)
	}
});

export default Quiz;
