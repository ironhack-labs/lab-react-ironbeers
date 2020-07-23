import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// Pages
import HomePage from './pages/HomePage.js';
import BeersPage from './pages/BeersPage.js';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import BeerDetailPage from './pages/BeerDetailPage';

// Components
import Header from './components/Header.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Fragment>
            <Header />
            <Route exact path="/beers" component={BeersPage} />
            <Route exact path="/random-beer" component={RandomBeerPage} />
            <Route
              exact
              path="/new-beer"
              render={(props) => {
                return <NewBeerPage {...props} />;
              }}
            />
            {/* <Route exact path="/new-beer" component={NewBeerPage} /> */}
            <Route exact path="/beers/:id" component={BeerDetailPage} />
          </Fragment>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
