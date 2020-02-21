import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import App from "./pages/home/App";
import Beers from "./pages/Beers/Beers";
import Beer from "./pages/Beer/Beer";
import RDMBeer from "./pages/RandomBeer/RDMBeer";
import AddBeer from "./pages/AddBeer/AddBeer";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <div className='row justify-content-center'>
          <Switch style={{margin: '200px'}}>
            <Route exact path="/" component={App} />
            <Route exact path="/beer/:id" component={Beer} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random-beer" component={RDMBeer} />
            <Route exact path="/new-beer" component={AddBeer} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
