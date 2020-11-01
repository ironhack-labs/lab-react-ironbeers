import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import BeerList from './components/BeerList';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import SingleBeer from './components/SingleBeer';
class App extends Component {


  state = {
    beers: [],
  };


  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      // console.log(response.data)
      this.setState({
        beers: response.data,
      });
    });
  }



  handleAdd = (event) => {
    event.preventDefault()
    console.log(event.target.name)
    console.log("submmitted")
    const {name, tagline, first_brewed, brewers_tips, attenuation_level , contributed_by , description} = event.target.name

    let newBeer = {
      name: name,
      tagline: tagline,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
      description: description,
    }

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then((response) =>{
      console.log(response)
        this.setState({
          beers: [response.data , ...this.state.beers]
        })      
    })
  }



  render() {
    return (
      <div className="container">
      <Switch>
        <Route exact path="/" render={() => { return <HomePage/>}} />
        <Route exact path="/beers" render={() => { return <BeerList beers={this.state.beers} />}} />
        <Route path="/random-beer" render={() => { return <RandomBeer/>}} />
        <Route path="/new-beer" render={() => { return <NewBeer onAdd={this.handleAdd}/> ; }} />
        <Route path="/beers/:beerId" component={SingleBeer} />
      </Switch>

      </div>
    );
  }
}

export default App;
