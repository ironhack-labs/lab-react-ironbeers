import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../public/styles/App.css";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import Navbar from "./components/Navbar";
import LinksBeers from "./components/LinksBeers";
import BeerDetail from "./pages/BeerDetail";
import RandomBeers from "./RandomBeer";
import Cards from "../src/components/UI/AllBeers";

const Home = () => {
  return (
    <Cards>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <LinksBeers />} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeers} />
          <Route path="/beer-detail/:id" component={BeerDetail} />
          <Route path="/new-beer" component={Navbar} />
        </Switch>
      </Router>
    </Cards>
  );
};

export default Home;
