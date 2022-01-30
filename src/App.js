import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import RandomBeer from "./components/RandomBeer";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import DetailedBeer from "./components/DetailedBeer";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>

      <Route  exact path="/beers">
        <Nav />
        <Beers />
      </Route>
      <Route  path="/random-beers">
        <Nav />
        <RandomBeer />
      </Route>
      <Route  path="/new-beer">
        <Nav />

        <NewBeer />
      </Route>
      <Route  path="/beers/:id">
        <Nav />
        <DetailedBeer />
      </Route>
    </div>
  );
}

export default App;
