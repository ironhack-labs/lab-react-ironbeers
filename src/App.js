import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import Card from './components/Card';
import Header from './components/Header';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <Router>
      <div className="App">
        {useLocation().pathname !== '/' && <Header />}
        <Switch>
          <Route exact path="/">
            <Link to="/beers">
              <Card title="All Beers" img={require('./assets/beers.png')} />
            </Link>
            <Link to="/random-beer">
              <Card
                title="Random Beer"
                img={require('./assets/random-beer.png')}
              />
            </Link>
            <Link to="/new-beer">
              <Card title="New Beer" img={require('./assets/new-beer.png')} />
            </Link>
          </Route>
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers/:id" component={BeerDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
