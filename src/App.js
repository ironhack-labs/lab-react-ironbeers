import React, { Component } from 'react'
import './App.css';
import HomePage from './components/HomePage/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Beers from './components/Beers/Beers'
import Beer from './components/Beer/Beer'
import RandomBeer from './components/RandomBeer/RandomBeer'
import Error from './components/Error/Error'

class App extends Component {
state = {
  beers: [],
  // randomBeer: {}
}

componentDidMount() {
  fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => response.json())
    .then((data) => {
      this.setState({ beers: data });
    })
    .catch((err) => console.log(err));
}

// Iteration 5
// getRandomBeer() {
//   fetch('https://ih-beers-api2.herokuapp.com/beers/random')
//     .then((response) => response.json())
//     .then((data) => {
//       this.setState({ randomBeer: data });
//     })
//     .catch((err) => console.log(err));

//     return this.state.randomBeer;
// }

  render() {
    const { beers } = this.state;

    return (
      <div className="App">
      <Router>
          <Switch>
            <Route path="/" component={ HomePage } exact /> 
            <Route path="/beers" render={ (rrdProps) => {
              return( 
                <Beers {...rrdProps} beersData={ beers } /> 
              );
            }} exact />
            <Route path="/beers/:beerId" render={ (rrdProps) => {
              return( 
                <Beer {...rrdProps} beersData={ beers } /> 
              );
            }} exact />
            {/* Iteration 5
            <Route path="/random-beer" render={ 
              (rrdProps) => {
                return( 
                  <Beer {...rrdProps} randomBeersData={() => { this.getRandomBeer() } } /> 
                );
              }
            } exact /> */}
            <Route path="/random-beer" component={ RandomBeer } exact />
            {/* <Route path="/new-beer" component={ Beers } /> */}
            <Route component={ Error } />
          </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

// without exact, the paths don't work