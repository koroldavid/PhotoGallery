import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools }          from 'redux-devtools-extension';
import thunkMiddleware                  from 'redux-thunk';

import reducers                         from './reducers';

export default function configureStore(initialState) {
	return createStore(
		reducers,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	);
}
