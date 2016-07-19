import React from 'react'
import { Link } from 'react-router'
import ReactMarkdown from 'react-markdown'
// temp markdown
import md from '../data/markdown/test.md'

const Answer = React.createClass({
	render() {
		let id = parseInt(this.props.params.questionId)
		const next = id < this.props.questions.length - 1 ? id + 1 : 0
		const explaination = this.props.question.explaination
		return (
			<div className="answer">
				<p>
					{this.props.quiz.correct ? 'Correct' : 'Incorrect'}
				</p>
				<div className="explaination">
					<h3>Explaination:</h3>
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
