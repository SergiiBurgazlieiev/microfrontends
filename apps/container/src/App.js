import React, { lazy, Suspense, useState, useEffect } from 'react';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

// helps to escape styles collision in prod
const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setSignedIn] = useState(false);

	const onSignInHandler = () => setSignedIn(true);
	const onSignOutHandler = () => setSignedIn(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn]);

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<Header isSignedIn={isSignedIn} onSignOut={onSignOutHandler} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path='/auth'>
							<AuthLazy onSignIn={onSignInHandler} />
						</Route>
						<Route path='/dashboard'>
							{!isSignedIn && <Redirect to='/' />}
							<DashboardLazy />
						</Route>
						<Route path='/' component={MarketingLazy} />
					</Switch>
				</Suspense>
			</StylesProvider>
		</Router>
	);
};
