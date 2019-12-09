import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const app = <BrowserRouter><App/></BrowserRouter>;

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
