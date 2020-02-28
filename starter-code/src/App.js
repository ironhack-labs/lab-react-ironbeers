import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
//
// import './App.css';
import Home from './Home';
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer'



class App extends Component {
  state={
    allbeers:[]
}

componentDidMount() {
  axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(response => response.data)
    .then((allBeers) => {
      this.setState({allbeers: allBeers })
    });
}

  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component= {Home} />
        <Route exact
        path="/allbeers"
        render={props => {
          return(
            <AllBeers allBeers= {this.state.allbeers}></AllBeers>
            
          );
        }}
         />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />

        </Switch>
      </div>
    );
  }
}

export default App;
