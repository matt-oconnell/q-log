import React from 'react';

const SingleInput = React.createClass({
	handleClick: function() {
		if (this.answer !== null) {
			console.log(this.answer.value)
			this.props.submitAnswer(this.answer.value, this.props.question)
		} else {
			console.log('need answer!')
		}
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
