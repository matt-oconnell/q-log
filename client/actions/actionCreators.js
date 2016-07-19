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
      return $.when(
          $.get(`http://localhost:31338/questions/${id}/question.json`),
          $.get(`http://localhost:31338/questions/${id}/explaination.md`)
      ).then(
      		(question, explaination) => {
              dispatch(newQuestionAction(id, question[0]))
              dispatch(newExplainationAction(id, explaination[0]))
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

function newExplainationAction(id, explaination) {
    return {
        type: 'NEW_EXPLAINATION',
        explaination,
        id
    }
}