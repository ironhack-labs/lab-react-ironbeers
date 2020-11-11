import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home/Home';
import BeersList from './components/BeersList/BeersList';
import SingleBeer from './components/SingleBeer/SingleBeer';
import 'bulma/css/bulma.css';

class App extends React.Component {
  state = {
    beers: [],
    singleBeer: {},
    errorStatus: false,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => this.setState({ beers: res.data }))
      .catch((err) => {
        console.log(err);
        this.setState({ errorStatus: !this.state.errorStatus });
      });
  }

  render() {
    if (this.state.errorStatus) {
      return (
        <div className="container has-text-centered" style={{height: 640}}>
          <article class="message is-danger is-align-self-center message-body has-text-danger" style={{height: 640}}>
            <div style={{marginTop: 276}}>
              Sorry! The Beer API is offline, no beer today :(
            </div>
          </article>
        </div>
      );
    }
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={(routeProps) => (
              <BeersList {...routeProps} beers={this.state.beers} />
            )}
          />
          <Route
            path="/beers/:id"
            render={(routeProps) => <SingleBeer {...routeProps} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
