import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';


import { Switch, Route } from 'react-router-dom'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavBar from './components/ui/NavBar'
import Home from './components/home'
import BeerList from './components/beerList'
import BeerDetails from './components/beerDetails'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>

          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/beers" render={() => <BeerList />} />
            <Route path="/:id" render={match => <BeerDetails {...match} />} />
            <Route path="/random-beer" render={() => <BeerDetails />} />


          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
