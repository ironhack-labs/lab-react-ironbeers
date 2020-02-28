import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Route } from 'react-router-dom';

ReactDOM.render(
<Route>
<App />
</Route>
, document.getElementById('root'));
registerServiceWorker();
