import React from "react";
import { Switch, Route } from "react-router-dom";

//----PAGES
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetails from "./pages/BeerDetails";
import Page404 from "./pages/Page404";

//----SPECIFIC COMPONENTRS
// import NavMain from "./NavMain";

import "./App.css";

function App() {
  return (
    <div className="big-wrapper">
      {/* <header className="App-header">
        <NavMain />
      </header> */}

      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" render={() => <Home title="homepage" />} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Route exact path="/beer-details/:_id" component={BeerDetails} />
        <Route path="*" component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
