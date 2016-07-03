import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

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

const store = createStore(rootReducer, defaultState)

export const history = syncHistoryWithStore(browserHistory, store)

export default store