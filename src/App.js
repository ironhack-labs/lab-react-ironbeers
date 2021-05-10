import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import axios from 'axios';



export default class App extends React.Component {

  state = {
    beers: ''
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response);
        this.setState({
          beers: response.data
        })
        console.log(this.state.beers)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Beers" component={() => <Beers beers={this.state.beers}/>}/>
          <Route exact path="/Beers/:id" component={BeerDetails}/>
          <Route exact path="/RandomBeer" component={RandomBeer}/>
          <Route exact path="/NewBeer" component={NewBeer}/>
        </Switch>
      </div>
    )
  }
}