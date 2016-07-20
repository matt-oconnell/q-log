import React from 'react';

const SingleInput = React.createClass({
	handleClick: function() {
		const { props, answer } = this
		props.submitAnswer(answer.value, props.question.correctAnswers)
	},
	render() {
		return (
			<div className="single-input">
				<input type="text" ref={(ref) => this.answer = ref} />
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
});

export default SingleInput;
