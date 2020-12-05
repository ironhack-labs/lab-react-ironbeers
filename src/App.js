import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './Home/HomePage';
import Navegation from './Navegation/Navegation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:path" component={Navegation} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
