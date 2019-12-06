import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Router';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
