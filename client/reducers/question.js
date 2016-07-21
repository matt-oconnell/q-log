function question(state = [], action) {
	switch(action.type) {
		case 'NEW_EXPLANATION':
			return {
				...state,
				explanation: action.explanation
			}
		case 'NEW_QUESTION':
			return {
				...state,
				title: action.question.title,
				questionText: action.question.questionText,
				tags: action.question.tags,
				type: action.question.type,
				answers: action.question.answers,
				correctAnswers: action.question.correctAnswers
			}
		case 'NEW_QUESTION_TEXT':
			console.log({
				...state,
				questionText: action.questionText
			})
			return {
				...state,
				questionText: action.questionText
			}
		default:
			return state
	}
}

export default question
