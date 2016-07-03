function questions(state = [], action) {
	switch(action.type) {
		case 'SUBMIT_ANSWER':
			console.log('submittin!', action.answer)
			return state
		default:
			return state
	}
}

export default questions