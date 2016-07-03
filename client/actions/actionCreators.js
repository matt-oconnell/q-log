// these are "action creators." they put together the action and dispatch it
export function submitAnswer(answer, question) {
	const q = question
	const correctAnswer = q.answers[q.correctAnswerIdx]
	const correct = correctAnswer === answer
	return {
		type: 'SUBMIT_ANSWER',
		correct
	}
}