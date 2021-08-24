import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import ListBeers from './ListBeers';
import SingleBeer from './SingleBeer';
import RandomBeer from './RandomBeer';

import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    beersArr: [],
    randomBeer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) =>
        this.setState({
          beersArr: response.data,
        })
      )
      .catch((error) => console.log(error));

    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((randomBeer) =>
        this.setState({
          randomBeer: randomBeer.data,
        })
      )
      .catch((error) => console.log(error));
  }

  renderContent() {
    return (
      <>
        <Route path="/list">
          <ListBeers beersArr={this.state.beersArr} />
        </Route>

        <Route
          exact
          path="/beer/:id"
          render={(routeProps) => {
            const selectedBeer = this.state.beersArr.find(
              (beer) => beer._id === routeProps.match.params.id
            );
            return <SingleBeer {...selectedBeer} />;
          }}
        />

        <Route path="/random">
          <RandomBeer {...this.state.randomBeer} />
        </Route>
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          {this.state.beersArr.length ? this.renderContent() : 'page loading'}
        </Switch>

        {/* 
        
        <RandomBeer /> */}
      </div>
    );
  }
}

export default App;
