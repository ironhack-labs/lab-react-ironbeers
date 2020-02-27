import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Switch, Route } from 'react-router-dom'


import NavBar from './components/ui/NavBar'
import BeersList from './components/pages/BeersList';
import BeerDetails from './components/pages/BeerDetails';
import BeerForm from './components/pages/BeerForm';

class App extends Component {
  render() {
    return (
      <>
        <NavBar/>

        <Switch>
          <Route exact path="/" render={() => <BeersList />} />
          <Route path="/new" render={() => <BeerForm />} />
          <Route path="/:id" render={match => <BeerDetails {...match} />} />
          <Route path="/random" render={(match) => <BeerDetails {...match} />} />
        </Switch>
      </>
    );
  }
}

export default App;
