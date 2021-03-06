import React from 'react'
import { Link } from 'react-router'
import ReactMarkdown from 'react-markdown'

const Answer = React.createClass({
	render() {
		let id = parseInt(this.props.params.questionId)
		const next = id < this.props.questions.length - 1 ? id + 1 : 0
		const md = this.props.question.explanation
		return (
			<div className="answer">
				<p>
					{this.props.quiz.correct ? 'Correct' : 'Incorrect'}
				</p>
				<div className="explanation">
					<h3>Explanation:</h3>
					<ReactMarkdown source={md} />
				</div>
				<Link to={`/${next}`}>
					Next >
				</Link>
			</div>
		)
	}
})

export default Answer

// explanation for later
// 
