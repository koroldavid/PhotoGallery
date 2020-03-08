import * as React      from 'react';
import { Provider }    from 'react-redux';
import Navigation      from './navigation';
import configureStore  from './redux/store';

const initialState = {};
const store        = configureStore(initialState);

export default function App() {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}
