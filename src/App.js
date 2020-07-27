import React from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/beers">
        <Header />
      </Route>
      <Route path="/random">
        <Header />
      </Route>
      <Route path="/new">
        <Header />
      </Route>
    </Switch>
  );
}

export default App;
