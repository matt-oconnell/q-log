import React from 'react';

const MultipleChoice = React.createClass({
	render() {
		return (
			<div className="multiple-choice">
				{
					this.props.answers.map((a, i) =>
						<button key={i} onClick={this.props.submitAnswer.bind(null, a)}>{a}</button>
					)
				}
			</div>
		)
	}
});

export default MultipleChoice;
