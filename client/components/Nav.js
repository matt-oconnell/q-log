import React from 'react';
import { Link } from 'react-router';

const NavElement = React.createClass({
	render() {
		const i = this.props.i
		const title = this.props.question.title
		return (
			<Link to={'/' + i}>
				{title}
			</Link>
		)
	}
})

const Nav = React.createClass({
	render() {

		const { questions } = this.props
		console.log(questions)
		return (
			<div className="nav">
				{
					questions.map((q, i) =>
						<NavElement question={q} i={i} key={i} />
					)
				}
			</div>
		)
	}
});

export default Nav;
