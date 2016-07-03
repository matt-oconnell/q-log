import React from 'react';
import MultipleChoice from './MultipleChoice'
import Tags from './Tags'

const Question = React.createClass({
	render() {
		const id = this.props.params.questionId
		const question = this.props.questions[id]
		return (
			<div>
				<h1>{ question.title }</h1>
				<p>{ question.questionText }</p>
				<MultipleChoice answers={ question.answers } {...this.props}/>
				<Tags tags={ question.tags } />
			</div>
		)
	}
});

export default Question;
