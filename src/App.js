import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import axios from 'axios';
import Beers from './components/beers/Beers';
import Beer from './components/beers/Beer';

function App() {
  const [state, setState] = useState([]);

  axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => setState(response.data));

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers">
        <Header />
        <Beers beers={state} />
      </Route>
      <Route path="/beers/:id">
        <Header />
        <Beer beers={state} />
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
