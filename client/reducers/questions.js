function questions(state = [], action) {
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			return state
		case 'NEW_QUESTION':
			return [
				...state.slice(0, action.id),
				Object.assign({}, state[action.id],
				{
					explaination: action.question
				}),
				...state.slice(action.id + 1)
			]
		default:
			return state
	}
}

export default questions