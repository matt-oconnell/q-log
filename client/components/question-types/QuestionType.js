import React from 'react'
import MultipleChoice from './MultipleChoice'
import SingleInput from './SingleInput'

const QuestionType = React.createClass({
	render() {
		const q = this.props.question
		return (
			<div>
				{ q.type == 'multiple-choice' ? <MultipleChoice question={ q } {...this.props}/> : null }
				{ q.type == 'single-input' ?  <SingleInput question={ q } {...this.props}/> : null }
			</div>
		)
	}
});

export default QuestionType