import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.min.css'
import 'bulma-helpers/css/bulma-helpers.min.css'
import { BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/fontawesome.css'


ReactDOM.render(

  <BrowserRouter>
     <App />
  </BrowserRouter>

, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
