import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage';
import Header from './components/Header.jsx';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer.jsx';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

class App extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseBack) => {
        // console.log('responseBack:', responseBack.data);
        this.setState({ beers: responseBack.data });
      });
  };

  render() {
    // console.log('STATE', this.state.beers);
    if (!this.state.beers) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
          <Header />
          <Route
            exact
            path="/beers"
            component={ListBeers}
            // beers={this.state.beers}
          />
          <Route
            exact
            path="/:id"
            render={(routeProps) => (
              <SingleBeer {...routeProps} beers={this.state.beers} />
            )}
          />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </div>
      );
    }
  }
}

export default App;
