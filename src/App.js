import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import HomePage from './views/HomePage';
import Header from './components/Header';
import ListBeers from './views/ListBeers';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

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
    //.length to catch this render when array is empty, so it does not pass empty array to children, but is cought in this condition. Only when array is full of objects (due to componentDiDMount) then it is passed as an object
    if (!this.state.beers.length) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <>
            <Header />
            <Switch>
              <Route
                exact
                path="/beers"
                component={ListBeers}
                // beers={this.state.beers}
              />
              <Route exact path="/random-beer" component={RandomBeer} />
              <Route exact path="/new-beer" component={NewBeer} />
              <Route
                exact
                path="/:id"
                render={(routeProps) => (
                  <SingleBeer {...routeProps} beers={this.state.beers} />
                )}
              />
            </Switch>
          </>
        </Switch>
      </div>
    );
  }
}
export default App;
