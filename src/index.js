import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path='/'>
					<App display='movies' />
				</Route>
				<Route path='/liked'>
					<App display='liked' />
				</Route>
				<Route path='/login'>
					<App display='login' />
				</Route>
				<Route path='/signup'>
					<App display='signup' />
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.register();
