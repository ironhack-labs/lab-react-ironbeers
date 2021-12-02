import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import ListofBeers from './components/ListofBeers';
import axios from 'axios'
import Details from './components/Details';
import Random from './components/Random';





export default class App extends Component {
  constructor(){
super()
 this.state = {
  beers: [],
 };
 
  };

componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((api) => {
      this.setState({ beers: api.data }
        );
    });
}


  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/details/:id" exact render={(props) => <Details {...props}    />} />
          <Route path="/random" render={() => <Random />} />
          <Route
            path="/beers"
            render={() => <ListofBeers beers={this.state.beers} />}
          />
        </Switch>
      </div>
    );
  }
}
