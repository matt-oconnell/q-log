import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'

// import root reducer
import rootReducer from './reducers/index'

import questions from './data/questions'
import status from './data/status'
import quiz from './data/quiz'

// create an object for the default data
const defaultState = {
	questions,
	status,
	quiz
}

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk))

export const history = syncHistoryWithStore(browserHistory, store)

export default store