import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Home from './components/beers/Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import Router from './Router'

ReactDOM.render(
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
       
    
    

, document.getElementById('root'));
registerServiceWorker();
