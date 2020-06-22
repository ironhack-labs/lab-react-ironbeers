import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

class App extends Component {
  state={
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data });
      });
  }

  addBeer(newBeer) {
    const beersCopy = [...this.state.beers];
    beersCopy.push(newBeer);
    this.setState({
      beers: beersCopy
    })
  };

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" render={(props) => <Beers beers={this.state.beers} />} />
          <Route path="/beers/:beerId" render={(props) => <BeerDetails {...props} />} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" render={(props) => <NewBeer addBeer={this.addBeer} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
