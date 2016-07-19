function question(state = [], action) {
	switch(action.type) {
		case 'NEW_EXPLAINATION':
			return {
				...state,
				explaination: action.explaination
			}
		case 'NEW_QUESTION':
			return { ...action.question }
		default:
			return state
	}
}

export default question