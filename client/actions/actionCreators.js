// these are "action creators." they put together the action and dispatch it
export function submitAnswer(questionId, i) {
	return {
		type: 'SUBMIT_ANSWER',
		questionId, i
	}
}