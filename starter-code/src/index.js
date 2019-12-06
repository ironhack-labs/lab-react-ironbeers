import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router'
import registerServiceWorker from './registerServiceWorker';
import GlobalStyles from "./styles/GlobalStyles";


ReactDOM.render(
	<>
		<GlobalStyles />
		<Router />
	</>,
document.getElementById('root'));

registerServiceWorker();
