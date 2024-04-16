import React, { lazy, Suspense } from 'react';
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
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path='/auth' component={AuthLazy} />
						<Route path='/' component={MarketingLazy} />
					</Switch>
				</Suspense>
			</BrowserRouter>
		</StylesProvider>
	);
};
