import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app

const mount = elementHTML => {
	ReactDOM.render(<App />, elementHTML);
};

// If we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRootElem = document.querySelector('#_marketing-dev-root');
	if (devRootElem) {
		mount(devRootElem);
	}
}

// If we are running through container/host then we should export mount function
export { mount };
