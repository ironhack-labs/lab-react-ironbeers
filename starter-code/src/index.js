import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UIkit from "uikit";
import "uikit/dist/css/uikit.min.css";
import Icons from "uikit/dist/js/uikit-icons";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";


UIkit.use(Icons);

const WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(<WithRouter />, document.getElementById('root'));
