import "./App.css";
import React from "react";
import HomePage from "./HomePage";
import AllBeersPage from "./AllBeersPage";
import RandomBeerPage from "./RandomBeerPage";
import AddBeerPage from "./AddBeerPage";
import BeerDetailsPage from "./BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Route exact path="/" component={HomePage} />

      <Route path="/beers" component={AllBeersPage} />

      <Route path="/random-beer" component={RandomBeerPage} />

      <Route path="/new-beer" component={AddBeerPage} />

      <Route path="/beers/:beerId" component={BeerDetailsPage} />

    </div>
  );
}

export default App;
