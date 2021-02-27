import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/Beers';

import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
      </Switch>
    </div>
  );
}

export default App;