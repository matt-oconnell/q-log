/*
	This is a root reducer. Takes all the others and combines into one
*/
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questions';
import question from './question';
import status from './status';
import quiz from './quiz';

const rootReducer = combineReducers({
	questions,
	question,
	status,
	quiz,
	routing: routerReducer
});

export default rootReducer;
