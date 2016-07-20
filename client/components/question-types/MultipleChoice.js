import React from 'react';

const MultipleChoice = React.createClass({
	checkAnswer(userAnswer) {
		const q = this.props.question
		const correctAnswers = q.correctAnswers
		this.props.submitAnswer(userAnswer, q.correctAnswers)
	},
	render() {
		const { question } = this.props
		return (
			<div className="multiple-choice">
				{
					question.answers.map((a, i) =>
						<button key={i} onClick={this.checkAnswer.bind(null, a)}>{a}</button>
					)
				}
			</div>
		)
	}
});

export default MultipleChoice;
