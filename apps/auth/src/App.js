import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

// helps to escape styles collision in prod
const generateClassName = createGenerateClassName({
	productionPrefix: 'auth',
});

export default ({ history }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch></Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
