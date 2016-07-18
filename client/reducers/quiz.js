function quiz(state = [], action) {
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			return {
				...state,
				correct: action.correct,
				submitted: true
			};
		// determine how to do this correctly
		case '@@router/LOCATION_CHANGE':
			return {
				...state,
				submitted: false
			};
			return state
		default:
			return state
	}
}

export default quiz