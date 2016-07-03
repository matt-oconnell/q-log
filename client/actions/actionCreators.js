// these are "action creators." they put together the action and dispatch it
export function submitAnswer(answer) {
	return {
		type: 'SUBMIT_ANSWER',
		answer
	}
}