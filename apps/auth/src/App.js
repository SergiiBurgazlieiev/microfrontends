import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

// helps to escape styles collision in prod
const generateClassName = createGenerateClassName({
	productionPrefix: 'auth',
});

export default ({ history }) => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<Router history={history}>
					<Switch>
						<Route path='/auth/signin' component={SignIn} />
						<Route path='/auth/signup' component={SignUp} />
					</Switch>
				</Router>
			</StylesProvider>
		</div>
	);
};
