import React, { lazy, Suspense, useState } from 'react';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

// helps to escape styles collision in prod
const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	const [isSignedIn, setSignedIn] = useState(false);

	const onSignInHandler = () => setSignedIn(true);
	const onSignOutHandler = () => setSignedIn(false);

	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header isSignedIn={isSignedIn} onSignOut={onSignOutHandler} />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path='/auth'>
							<AuthLazy onSignIn={onSignInHandler} />
						</Route>
						<Route path='/' component={MarketingLazy} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</StylesProvider>
	);
};
