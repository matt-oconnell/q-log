import React from 'react';

const Status = React.createClass({
	render() {
		const q = this.props.questions[this.props.params.questionId]
		return (
			<div className="status">
				<h1>Status</h1>
				<p>{ q.title }</p>
			</div>
		)
	}
});

export default Status;
