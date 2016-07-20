import React from 'react';

const Status = React.createClass({
	render() {
		const q = this.props.question
		const { status, quiz } = this.props
		return (
			<div className="status">
				<h1>Status</h1>
				<p><span>User:</span> {status.user}</p>
				<p><span>Questions:</span> {status.correct} / {status.answered}</p>
				<hr />
				<p>{ q.title }</p>
				<p><span>Correct Answer:</span> {q.correctAnswer}</p>
				<hr />
				<p><span>Current Index:</span> { quiz.currentQuestionId }</p>
				<p><span>Submitted:</span> { quiz.submitted ? 'true' : 'false'}</p>
				<p><span>Correct: { quiz.correct ? 'true' : 'false' }</span></p>
			</div>
		)
	}
});

export default Status;
