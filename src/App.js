import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Newbeer from './pages/Newbeer';
import Randombeer from './pages/Randombeer';
import OneBeer from './pages/OneBeer';
import beerApi from './api/beerApi';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  addBeer = (beer) => {
    beerApi
      .createOne(beer)
      .then((apiResponse) => {
        this.props.history.push('/beers');
      })
      .catch((apiError) => {
        console.log(apiError);
      });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/random-beer" component={Randombeer} />
          <Route
            path="/new-beer"
            render={(props) => {
              return <Newbeer handleAddBeer={this.addBeer} />;
            }}
          />
          <Route path="/beers/:id" component={OneBeer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
