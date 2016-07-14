import React from 'react'

const QuestionContent = React.createClass({
	render() {
		const q = this.props.params.question
		return (
			<div>
				{ q.type == 'multiple-choice' ? <MultipleChoice question={ question } {...this.props}/> : null }
				{ q.type == 'single-input' ?  <p>Hi</p> : null }
			</div>
		)
	}
});

export default QuestionContent