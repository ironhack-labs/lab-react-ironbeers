import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import { Container, Row, Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap'

import NavBar from './components/NavBar';
import Home from './components/beers/Home';
import BeerDetails from './components/beers/Beer-details';
import BeerRandom from './components/beers/Beer-random';
import BeerForm from './components/beers/BeerForm'

import BeerList from "./components/beers/Beer-list"

class App extends Component {
  render() {
    return (

      <>
      <div className="App">
      <NavBar />

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/beers" component={BeerList}/>
      <Route path="/beers/:id" component={BeerDetails} />
      <Route path="/beers/random" component={BeerRandom} />
      <Route path="/beers/form" component={BeerForm} />


    </Switch>
    </div>
    </>

    );
  }
}

export default App;
