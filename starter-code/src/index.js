import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
