import $ from 'jquery'

// Firebase
import firebase from 'firebase'
import config from './../fb-config'

firebase.initializeApp(config)

const db = firebase.database();


// these are "action creators." they put together the action and dispatch it

export function submitAnswer(userAnswer, correctAnswers) {
    if(typeof userAnswer === 'string') {
        userAnswer = userAnswer.toLowerCase()  
    }
    if(typeof correctAnswers[0] === 'number') {
        userAnswer = parseFloat(userAnswer)
    }
    const correct = correctAnswers.indexOf(userAnswer) > -1
  	return {
    		type: 'SUBMIT_ANSWER',
    		correct
  	}
}

/*
Get questions from Firebase
*/
export function loadQuestions() {
  return function(dispatch) {
      return db.ref('questions').once('value').then(
        snapshot => {
          dispatch(LoadQuestionsAction(snapshot))
        },
        error => console.error(error)
      )
  }
}

function LoadQuestionsAction(snapshot) {
    return {
        type: 'LOAD_QUESTIONS',
        questions: snapshot.val()
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
