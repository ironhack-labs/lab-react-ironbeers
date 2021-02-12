import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './HomePage';
import Header from './Header';
import BeersList from './BeersList';


function App() {
  return (
    <div>

        <BrowserRouter>
        <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      {<Route exact path="/beers" component={BeersList} />}
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;