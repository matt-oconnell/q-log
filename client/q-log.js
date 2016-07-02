import React from 'react';
import {render} from 'react-dom';

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
				<Route path="/view/:questionId" component={Question}/>
			</Route>
		</Router>
	</Provider>
);


render(router, document.getElementById('root'));

