import React from 'react';
import Tags from './Tags'
import Answer from './Answer'
import QuestionType from './question-types/QuestionType'
import ReactMarkdown from 'react-markdown'

const Question = React.createClass({
	render() {
		const id = this.props.params.questionId
		const question = this.props.question
		return (
			<div>
				<h1>{ question.title }</h1>
				<ReactMarkdown source={ question.questionText } />
				<QuestionType question={ question } {...this.props}/>
				{ this.props.quiz.submitted ? <Answer question={ question } {...this.props}/> : null }
				<Tags tags={ question.tags } />
			</div>
		)
	}
});

export default Question;
