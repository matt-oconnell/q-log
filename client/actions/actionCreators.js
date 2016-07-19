import $ from 'jquery'

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

/*
	Dynamically load new questions
*/
export function newQuestion(id) {
	return function (dispatch) {
    	return getQuestion(id).then(
      		question => dispatch(newQuestionAction(question)),
      		error => console.log('error fetching')
    	);
  	};
}

function getQuestion(id) {
    return $.get(`http://localhost:31338/${id}.json`)
}

function newQuestionAction(question) {
  return {
    type: 'NEW_QUESTION',
    question
  };
}

