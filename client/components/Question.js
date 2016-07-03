import React from 'react';

const Question = React.createClass({
	render() {
		const id = this.props.params.questionId
		const question = this.props.questions[id]
		return (
			<div>
				<h1>{ question.title }</h1>
				<p>{ question.questionText }</p>
			</div>
		)
	}
});

export default Question;
