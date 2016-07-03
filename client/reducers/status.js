function status(state = [], action) {
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			return {
				...state,
				answered: state.answered + 1,
				correct: action.correct ? state.correct + 1 : state.correct
			};
		default:
			return state
	}
}

export default status