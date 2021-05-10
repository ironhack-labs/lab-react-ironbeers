import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Beers from './components/beers/Beers';

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/" component={Beers} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
