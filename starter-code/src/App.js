import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Homepage/HomePage'
import Beers from './Beers/Beers';
import axios from 'axios';

class App extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(response => response.data)
      .then((allBeers) => {
        this.setState({ beers: allBeers })
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path="/beers"
            render={props => {
              return (
                <Beers beers={this.state.beers}></Beers>
              );
            }}
          />
          <Route path='/random-beer' component={Beers} />
          <Route path='/new-beer' component={Beers} />
        </Switch>

      </div>
    );
  }
}

export default App;
