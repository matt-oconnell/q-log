import $ from 'jquery'

// these are "action creators." they put together the action and dispatch it
export function submitAnswer(userAnswer, correctAnswer) {
  	const correct = correctAnswer === userAnswer
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
      return $.when(
          $.get(`http://localhost:31338/questions/${id}/question.json`),
          $.get(`http://localhost:31338/questions/${id}/explanation.md`)
      ).then(
      		(question, explanation) => {
              dispatch(newQuestionAction(id, question[0]))
              dispatch(newExplanationAction(id, explanation[0]))
          },
      		error => console.log('error fetching the stuffs', error)
    	);
  	};
}

function newQuestionAction(id, question) {
    return {
        type: 'NEW_QUESTION',
        question,
        id
    }
}

function newExplanationAction(id, explanation) {
    return {
        type: 'NEW_EXPLANATION',
        explanation,
        id
    }
}
