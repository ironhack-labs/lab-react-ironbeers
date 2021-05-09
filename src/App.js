import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import SingleBeer from './components/SingleBeer';
import axios from 'axios';

class App extends React.Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/')
      .then((result) => {
        this.setState({ ...this.state, beers: [...result.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/beers/:beerId"
            component={(routeProps) => (
              <SingleBeer {...routeProps} beers={this.state.beers} />
            )}
          />
          <Route
            path="/beers"
            component={() => <ListBeers beers={this.state.beers} />}
          />
          <Route path="/random-beer" component={() => <RandomBeer />} />
          <Route path="/new-beer" component={() => <NewBeer />} />
          <Route path="/" component={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default App;
