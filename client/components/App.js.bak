import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
	return {
		questions: state.questions,
		question: state.question,
		status: state.status,
		quiz: state.quiz
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// Add all the props from state to props (all of our action creators)
// This helps not pass data between multiple levels via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
