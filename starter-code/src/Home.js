import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../public/styles/App.css";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import Navbar from "./components/Navbar";
import LinksBeers from "./components/LinksBeers";
import BeerDetail from "./pages/BeerDetail";

const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <LinksBeers />} />
        <Route path="/beers" component={Beers} />
        <Route path="/:id" component={BeerDetail} />
        <Route path="/random-beer" component={Navbar} />
        <Route path="/new-beer" component={Navbar} />
      </Switch>
    </Router>
  );
};

export default Home;
