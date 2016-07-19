import React from 'react';
import {render} from 'react-dom';

// CSS
import css from './styles/style.styl';

// Components
import App from './components/App';
import Question from './components/Question';
import Quiz from './components/Quiz';

// Routing
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

// Store
import store, {history} from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Quiz}/>
				<Route path="/:questionId" component={Question}/>
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root'));


import { newQuestion } from './actions/actionCreators';
// on each page change, trigger this
history.listen(location => {
	const id = location.pathname.slice(1)
	store.dispatch(newQuestion(location.pathname))
})
// store.dispatch(testThunk())