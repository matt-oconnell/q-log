import React from 'react';
import MultipleChoice from './MultipleChoice'
import Tags from './Tags'
import Answer from './Answer'

const Question = React.createClass({
	render() {
		const id = this.props.params.questionId
		const question = this.props.questions[id]
		return (
			<div>
				<h1>{ question.title }</h1>
				<p>{ question.questionText }</p>
				<MultipleChoice question={ question } {...this.props}/>
				{ this.props.quiz.submitted ? <Answer question={ question } {...this.props}/> : null }
				<Tags tags={ question.tags } />
			</div>
		)
	}
});

export default Question;
