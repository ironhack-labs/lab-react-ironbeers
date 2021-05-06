import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/pages/App';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <main>
        <App />
      </main>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

