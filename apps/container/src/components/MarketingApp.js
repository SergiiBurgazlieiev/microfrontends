import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default () => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			/* 
			  User clicks link governed by Marketing app
				where we are using Memory History. Communicate
				change up to Container, and then update its 
			 	current path. 
			 */
			onNavigate: ({ pathname: nextPathname }) => {
				const { pathname } = history.location;
				if (pathname !== nextPathname) {
					history.push(nextPathname);
				}
			},
		});

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />;
};
