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
    console.log(userAnswer, correctAnswers)
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
  Dynamically load new questions & explanations
*/
export function newQuestion(id) {
  return function (dispatch) {
      return db.ref('questions').child(id).once('value').then(
        snapshot => {
          dispatch(newQuestionAction(id, snapshot.val()))
        },
        error => console.error(error)
      )
      // return $.get(`http://localhost:31338/questions/${id}.json`).then(
      //     question => dispatch(newQuestionAction(id, question)),
      //     error => console.log('error fetching the stuffs', error)
      // )
    }
}

function newQuestionAction(id, question) {
  console.log('question', question)
    return {
        type: 'NEW_QUESTION',
        question,
        id
    }
}

export function newExplanation(id) {
  return function (dispatch) {
      return $.get(`http://localhost:31338/explanations/${id}.md`).then(
          explanation => dispatch(newExplanationAction(id, explanation)),
          error => console.log('error fetching the stuffs', error)
      )
    }
}

function newExplanationAction(id, explanation) {
    return {
        type: 'NEW_EXPLANATION',
        explanation,
        id
    }
}