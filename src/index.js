import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // <== IMPORT

 

// Next, wrap the <App /> with the <Router> and </Router> tags

 

ReactDOM.render(

  <Router>                            

    <App />

  </Router>,                        

  document.getElementById("root")

);

 

reportWebVitals();
