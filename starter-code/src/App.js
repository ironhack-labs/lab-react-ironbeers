import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import BeersList from './BeersList/BeersList';
import Navigation from './Navigation/Navigation';
import RandomBeer from './RandomBeer/RandomBeer';
import NewBeer from './NewBeer/NewBeer';
import OneBeer from './OneBeer/OneBeer';




class App extends Component {
  state = {
    beers: [],
    randomBeer: {}
  }

  componentDidMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then(res => res.json())
    .then((data) => {
      this.setState({ beers: data })
      console.log(this.state.beers)
      
    })
    .catch(console.log("wait..."))
    
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(res => res.json())
    .then((data) => {
      this.setState({ randomBeer: data })
      console.log(this.state.randomBeer)
      
    })
    .catch(console.log("wait..."))
  }



  render() {
    return (
      <div className="App">
        
        <section className="mainpage">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Home></Home>;
              }}
            />
             <Route
              exact
              path="/beers"
              render={() => {
                return (
                  <React.Fragment>
                  <Navigation></Navigation>
                  <BeersList beers={this.state.beers} ></BeersList>
                  </React.Fragment>
                );
              }}
            />
            <Route
              exact
              path="/randomBeer"
              render={() => {
                return (
                  <React.Fragment>
                  <Navigation></Navigation>
                  <RandomBeer beer={this.state.randomBeer}></RandomBeer>
                  </React.Fragment>
                );
              }}
            />
            <Route
              exact
              path="/newBeer"
              render={() => {
                return (
                  <React.Fragment>
                  <Navigation></Navigation>
                  <NewBeer></NewBeer>
                  </React.Fragment>
                );
              }}
            />
            <Route
              exact
              path="/:id"
              render={props => {
                
                let chosenBeer = props.match.params.id;

                const filteredBeer = this.state.beers.filter((beer) => beer._id.includes(chosenBeer));
                
                
                return (
                  <React.Fragment>
                  <Navigation></Navigation>
                  <OneBeer beer={filteredBeer}></OneBeer>
                  </React.Fragment>
                );
              }}
            />
          </Switch>
        </section>
         
      </div>
    );
  }
}

export default App;
