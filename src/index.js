import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"; 

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/beers" element={<Beers />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
    </Routes>
    </Router>,
  document.getElementById('root')
);

// comment skipped to stay organized
reportWebVitals();