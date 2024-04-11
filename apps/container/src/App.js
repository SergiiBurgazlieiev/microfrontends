import React from 'react';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

// helps to escape styles collision in prod
const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<BrowserRouter>
				<Header />
				<MarketingApp />
			</BrowserRouter>
		</StylesProvider>
	);
};
