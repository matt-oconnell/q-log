function quiz(state = [], action) {
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			return {
				...state,
				correct: action.correct,
				submitted: true
			};
			return state
		default:
			return state
	}
}

export default quiz