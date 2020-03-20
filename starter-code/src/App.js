import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import HomePage from "./pages/Home.page"
import BeerPage from "./pages/Beer.page"
import RandomBeerPage from "./pages/RandomBeer.page"
import NewBeerPage from "./pages/NewBeer.page"
import BeerInfoPage from "./pages/BeerInfo.page"
import './App.css';


const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/beers/:id" component={props => <BeerInfoPage beerId={props.match.params.id} />} />
        <Route path="/beers" component={BeerPage} />
        <Route path="/random-beer" component={RandomBeerPage} />
        <Route path="/new-beer" component={NewBeerPage} />
      </Switch>
    </Layout>
  </Router>
);

export default App;