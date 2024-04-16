import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start up the app

const mount = (elementHTML, { onNavigate, defaultHistory, initialPath }) => {
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		});

	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} />, elementHTML);

	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;
			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		},
	};
};

// If we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRootElem = document.querySelector('#_marketing-dev-root');
	if (devRootElem) {
		mount(devRootElem, { defaultHistory: createBrowserHistory() });
	}
}

// If we are running through container/host then we should export mount function
export { mount };
