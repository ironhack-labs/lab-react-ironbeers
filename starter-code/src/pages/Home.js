import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../public/styles/App.css";
import Beers from "./Beers";
import NewBeer from "../NewBeer";
import Navbar from "../components/Navbar";
import LinksBeers from "../components/LinksBeers";
import BeerDetail from "./BeerDetail";
import RandomBeers from "./RandomBeer";
import ContainerPage from "../components/UI/ContainerPage";
import FormBeer from "./FormBeer";

const Home = () => {
  return (
    <ContainerPage>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <LinksBeers />} />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeers} />
          <Route path="/beer-detail/:id" component={BeerDetail} />
          <Route path="/new-beer" component={FormBeer} />
        </Switch>
      </Router>
    </ContainerPage>
  );
};

export default Home;
