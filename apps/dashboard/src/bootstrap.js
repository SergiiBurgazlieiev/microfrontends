import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (elementHTML) => {
	const app = createApp(Dashboard);
	app.mount(elementHTML);
};

// If we are in dev and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRootElem = document.querySelector('#_dashboard-dev-root');
	if (devRootElem) {
		mount(devRootElem);
	}
}

// If we are running through container/host then we should export mount function
export { mount };
