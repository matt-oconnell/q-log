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
// export function loadQuestions() {
//   return function(dispatch) {
//       // return db.ref('questions').once('value').then(
//       //   snapshot => {
//       //     dispatch(loadQuestionsAction(snapshot))
//       //   },
//       //   error => console.error(error)
//       // )
//       return $.get(`http://localhost:31338/list.json`).then(
//           questions => {
//              dispatch(loadQuestionsAction(questions))
//           },
//           error => console.log('error fetching the list', error)
//       )
//   }
// }

function loadQuestionsAction(questions) {
    return {
        type: 'LOAD_QUESTIONS',
        questions: questions
    }
}

/*
  Dynamically load new questions & explanations
*/
export function newQuestion(id) {
  return function (dispatch) {
      // return db.ref('questions').child(id).once('value').then(
      //   snapshot => {
      //     dispatch(newQuestionAction(id, snapshot.val()))
      //   },
      //   error => console.error(error)
      // )
      return $.get(`http://localhost:31338/list.json`).then(
          questions => {
            const question = questions[id]
            dispatch(loadQuestionsAction(questions))
            dispatch(newQuestionAction(id, question))
          },
          error => console.log('error fetching the list', error)
      )
    }
}

function newQuestionAction(id, question) {
    return {
        type: 'NEW_QUESTION',
        question,
        id
    }
}

export function newQuestionText(id) {
  return function (dispatch) {
      return $.get(`http://localhost:31338/questions/${id}.md`).then(
          questionText => dispatch(newQuestionTextAction(id, questionText)),
          error => console.log('error fetching the question text', error)
      )
    }
}

function newQuestionTextAction(id, questionText) {
    return {
        type: 'NEW_QUESTION_TEXT',
        questionText,
        id
    }
}

export function newExplanation(id) {
  return function (dispatch) {
      return $.get(`http://localhost:31338/explanations/${id}.md`).then(
          explanation => dispatch(newExplanationAction(id, explanation)),
          error => console.log('error fetching the explaination', error)
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