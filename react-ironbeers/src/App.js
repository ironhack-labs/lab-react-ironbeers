import React, { Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';

class App extends Component {

  constructor() {
    super()
    this.state = {
      beers: [],
      newBeer: {},

    }
  }

  componentDidMount() {
    // ALL BEERS GET ROUTE
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
      .catch(err => console.log(err))

    }


  addBeerHandler = (theBeer) => {
    axios.post('https://ih-beer-api.herokuapp.com/beers/new', theBeer)
      .then(response => {
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route 
            exact path='/all-beers'
            render={(props) => <Beers {...props} allBeers={this.state.beers} />} 
          />
          <Route exact path='/random-beer' component={ RandomBeer } />
          <Route 
            path='/new-beer'
            render={(props) => <NewBeer {...props} addTheBeer={this.addBeerHandler} />} 
          />
          <Route 
            path='/all-beers/:beerIndex'
            render={(props) => <SingleBeer {...props} allBeers={this.state.beers} />} 
          />
        </Switch>
      </div>
    );
  }
}

export default App;
