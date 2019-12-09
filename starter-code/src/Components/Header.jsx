import React, { Component } from 'react';

import {
	BrowserRouter,
	Switch,
	Route,
	withRouter,
	Link
} from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<Link
				to="/"
				style={{
					fontFamily: 'monospace',
					padding: '15px',
					background: 'rgb(238,174,202)',
					background:
						'linear-gradient(121deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					textDecoration: 'none'
				}}
			>
				GO HOME, YOU'RE DRUNK.
			</Link>
		</header>
	);
}
