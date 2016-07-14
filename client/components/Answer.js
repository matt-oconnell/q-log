import React from 'react'
import { Link } from 'react-router'

const Answer = React.createClass({
	render() {
		let id = parseInt(this.props.params.questionId)
		const next = id < this.props.questions.length - 1 ? id + 1 : 0
		return (
			<div className="answer">
				<p>
					{this.props.quiz.correct ? 'Correct' : 'Incorrect'}
				</p>
				<div className="explaination">
					<h3>Explaination:</h3>
					<p>{this.props.question.explaination}</p>
				</div>
				<Link to={`/${next}`}>
					Next >
				</Link>
			</div>
		)
	}
})

export default Answer
