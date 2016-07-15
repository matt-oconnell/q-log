function quiz(state = [], action) {
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			return {
				...state,
				correct: action.correct,
				submitted: true
			};
		case 'NEXT_PAGE':
			console.log('no????')
			return {
				...state,
				correct: null,
				submitted: false
			};
			return state
		default:
			return state
	}
}

export default quiz