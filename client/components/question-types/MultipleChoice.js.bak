import React from 'react';

const MultipleChoice = React.createClass({
	render() {
		const { question } = this.props
		return (
			<div className="multiple-choice">
				{
					question.answers.map((a, i) =>
						<button key={i} onClick={this.props.submitAnswer.bind(null, a, question)}>{a}</button>
					)
				}
			</div>
		)
	}
});

export default MultipleChoice;
