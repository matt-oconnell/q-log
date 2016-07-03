import React from 'react';

const Answer = React.createClass({
	render() {
		return (
			<div className="answer">
				<p>
					{this.props.quiz.correct ? 'Correct' : 'Incorrect'}
				</p>
				<div className="explaination">
					<h3>Explaination:</h3>
					<p>{this.props.question.explaination}</p>
				</div>
			</div>
		)
	}
});

export default Answer;
