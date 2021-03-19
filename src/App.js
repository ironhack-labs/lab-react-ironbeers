import React from 'react';
import { Route, Switch } from 'react-router';
import axios from 'axios';
import './App.css';
import { Component } from 'react';
import HomePage from './Components/HomePage';
import BeersList from './Components/BeersList';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import OneBeer from './Components/OneBeer';


class App extends Component {
  state = {
    beers: null,
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      this.setState({beers: response.data})
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  render (){
    if (this.state.beers === null){
      return <div className="loading">Loading...</div>
    }

    console.log(this.state.beers[0]);

    return (
    <div className="App">
      <Switch>
        <Route exact
          path="/"
          component={HomePage}
        />
        <Route exact 
          path="/beers"
          render={() => { return <BeersList beers={this.state.beers} />}}
        />
        <Route exact
          path="/beer/:id"
          render={(historyProps) => {return <OneBeer beers={this.state.beers} {...historyProps} /> }}
        />
        <Route exact 
          path="/random-beer"
          component={RandomBeer}
        />
        <Route exact 
          path="/new-beer"
          component={NewBeer}
        />
      </Switch>  
    </div>
  )};
};

export default App;
