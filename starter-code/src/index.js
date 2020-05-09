import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import UIkit from 'uikit';
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
