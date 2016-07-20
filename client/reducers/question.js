function question(state = [], action) {
	switch(action.type) {
		case 'NEW_EXPLANATION':
			return {
				...state,
				explanation: action.explanation
			}
		case 'NEW_QUESTION':
			return { ...action.question }
		default:
			return state
	}
}

export default question
