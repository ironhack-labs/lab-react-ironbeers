import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home';
import Beers from './Components/Beers';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import Lost from './Components/Lost'
import BeerDetails from './Components/BeerDetails';
import axios from 'axios'
import './App.css';





export class App extends Component {
  state = {
    beers: null,
}

componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then((response) => {
        // console.log(response.data);
        this.setState({beers: response.data})
    })
    .catch(err => {console.log(err)})
}



  render() {

    if (this.state.beers === null) {
      return <div>One sec, just heading to the bar...</div>
    }
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beer"
            render={(historyProps) => {
              return <Beers {...historyProps} beers={this.state.beers} />;
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={(historyProps) => {
              return <RandomBeer {...historyProps} beers={this.state.beers} />;
            }}
          />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route
            exact
            path="/beer-details/:id"
            render={(historyProps) => {
              return <BeerDetails {...historyProps} beers={this.state.beers} />;
            }}
          />
          <Route exact path="*" component={Lost} />
        </Switch>
      </div>
    );
  }
}

export default App



