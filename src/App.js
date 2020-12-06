import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Home from './Components/Home';
import Header from './Components/Header';
import Singlebeer from './Components/Singlebeer';
import Beers from './Pages/Beers';
import Randombeer from './Pages/Randombeer';
import Newbeer from './Pages/Newbeer';
import { Route, Link, Switch } from 'react-router-dom';

export default class App extends Component {
  state = { isLoading: true, data: null };

  apiRequest = (subRoute) => {
    console.log('get all beers component is called');
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers${subRoute}`)
      .then((responseBack) => {
        console.log('reponseback', responseBack.data);
        this.setState({ isloading: false, data: responseBack.data });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(reactRouterProps) => <Home {...reactRouterProps} />}
          />
          <Route
            exact
            path="/beers"
            render={(reactRouterProps) => (
              <Beers {...reactRouterProps} getAllBeers={this.apiRequest} />
            )}
          />
          <Route
            exact
            path="/random-beer"
            render={(reactRouterProps) => <Randombeer {...reactRouterProps} />}
          />
          <Route
            exact
            path="/new-beer"
            render={(reactRouterProps) => <Newbeer {...reactRouterProps} />}
          />
          <Route
            exact
            path="/:id"
            render={(reactRouterProps) => <Singlebeer {...reactRouterProps} />}
          />
        </Switch>
      </div>
    );
  }
}
