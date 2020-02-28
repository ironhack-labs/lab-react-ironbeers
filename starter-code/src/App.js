import React, { Component } from 'react';
import './App.css';
import Home from "./components/pages/home/Home"
import { Switch, Route } from 'react-router-dom'
import AllCardsPage from "./components/pages/allCards/AllCardsPage"
import BeerDetailPage from "./components/pages/BeerDetail/BeerDetailPage"
import RandomBeerPage from "./components/pages/randomBeerPage/RandomBeerPage"


class App extends Component {
  render() {
    return (
      <>
        <Switch>

          <Route exact path="/" render={() => <Home />} />
          <Route path="/allBeers" render={() => <AllCardsPage />} />
          <Route path="/beer/:id" render={(match) => <BeerDetailPage {...match} />} />
          <Route path="/random" render={() => <RandomBeerPage />} />


        </Switch>
      </>
    );
  }
}

export default App;
