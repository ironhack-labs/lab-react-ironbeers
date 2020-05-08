import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router'
import registerServiceWorker from './registerServiceWorker';

import 'antd/dist/antd.css'

ReactDOM.render(<Router/>, document.getElementById('root'));
registerServiceWorker();
