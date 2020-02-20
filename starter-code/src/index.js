import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
