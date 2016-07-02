/*
 Quiz Component
 */
var Quiz = React.createClass({
	getInitialState: function() {
		return {
			questions: [],
			// Should we keep this, even though structure is defined in json?
			currentQuestion: {
				questionText: '',
				answers: [],
				tags: [],
				type: '',
				correctAnswerIdx: null,
				explaination: ''
			},
			questionStatus: {
				showResult: false,
				correct: null
			},
			progress: {
				questionsAttempted: 0,
				questionsCorrect: 0,
				percentage: 0
			}
		};
	},

	componentDidMount: function() {
		this.serverRequest = $.get(this.props.source, (questions) => {
			this.setState({
				questions: questions
			});
			this.setCurrentQuestion(0)
		});
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	setCurrentQuestion: function(currentQuestionIdx) {
		this.setState({
			currentQuestion: this.state.questions[currentQuestionIdx],
			questionStatus: {
				showResult: false,
				correct: null
			}
		});
	},

	selectCurrentAnswer: function(answerIndex) {
		var isCorrect = answerIndex == this.state.currentQuestion.correctAnswerIdx;

		var progress = {
			questionsAttempted: this.state.progress.questionsAttempted + 1,
			questionsCorrect: isCorrect ? this.state.progress.questionsCorrect + 1 : this.state.progress.questionsCorrect
		};
		progress.percentage = progress.questionsCorrect / progress.questionsAttempted * 100;

		this.setState(
			{
				questionStatus: {
					showResult: true,
					correct: isCorrect
				},
				progress: progress
			}
		);
	},

	render: function() {
		var result = <Result correct={this.state.questionStatus.correct}
		                     explaination={this.state.currentQuestion.explaination}/>;
		return (
			<div className="quiz">
				<QuestionNav questions={this.state.questions} selectQuestion={this.setCurrentQuestion}/>
				<Progress progress={this.state.progress}/>
				<Question data={this.state.currentQuestion} showResult={this.state.showResult}/>
				<MultipleChoice answers={this.state.currentQuestion.answers} selectAnswer={this.selectCurrentAnswer}/>
				<div className="tags">
					{
						this.state.currentQuestion.tags.map(tag => <p>{tag}</p>)
					}
				</div>
				{ this.state.questionStatus.showResult ? result : null }
			</div>
		)
	}
});

/*
 QuestionNav
 */
var QuestionNav = React.createClass({
	render: function() {
		return (
			<div className="question-nav">
				{ this.props.questions.map((question, i) => <p
					onClick={() => this.props.selectQuestion(i)}>{question.questionText}</p>) }
			</div>
		)
	}
});

/*
 Progress Component
 */
var Progress = React.createClass({
	render: function() {
		return (
			<div className="progress">
				<h4>{this.props.progress.questionsAttempted}</h4>
				<h4>{this.props.progress.questionsCorrect}</h4>
				<h4>{this.props.progress.percentage}%</h4>
			</div>
		)
	}
});

/*
 Question Component
 */
var Question = React.createClass({
	render: function() {
		return (
			<div className="question">
				<h1>{this.props.data.questionText}</h1>
			</div>
		)
	}
});

/*
 Result Component
 */
var Result = React.createClass({
	render: function() {
		return (
			<div className="result">
				<h3>{this.props.correct ? 'Yayyyy! Correct' : 'Nope, wrong bro'}</h3>
				<p className="explaination">{this.props.explaination}</p>
			</div>
		)
	}
});

/*
 Multiple Choice Answer
 */
var MultipleChoice = React.createClass({
	render: function() {
		return (
			<div className="answers">
				{
					this.props.answers
						.map((answer, i) => <div onClick={() => this.props.selectAnswer(i)}>{answer}</div>)
				}
			</div>
		)
	}
});

ReactDOM.render(
	<Quiz source="http://s.box/react/data/questions.json"/>,
	document.getElementById('container')
);