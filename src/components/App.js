import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
