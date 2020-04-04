import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <React.StrictMode>
    <Router>
      <App />
    </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
registerServiceWorker();
