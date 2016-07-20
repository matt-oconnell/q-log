function questions(state = [], action) {
	switch(action.type) {
		case 'LOAD_QUESTIONS':
			return [ ...action.questions ]
		default:
			return state
	}
}

export default questions
