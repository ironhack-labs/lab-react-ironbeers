import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

// const Home = () => <h1>Home</h1>;
// const Beers = () => <h1>Beers</h1>;
// const RandomBeer = () => <h1>Random Beer</h1>;
// const NewBeer = () => <h1>New Beer</h1>;
//const BeerDetail = () => <h1>Beer Detail</h1>;

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers/:beerId" component={BeerDetail} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beers" component={AllBeers} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
