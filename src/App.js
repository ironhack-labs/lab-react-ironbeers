import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Beers from "./pages/beers";
import RandomBeer from "./pages/random-beer";
import NewBeer from "./pages/new-beer";
import SingleBeer from "./pages/single-beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element=<Homepage />></Route>
        <Route path="/beers" element=<Beers />></Route>
        <Route path="/random-beer" element=<RandomBeer />></Route>
        <Route path="/new-beer" element=<NewBeer />></Route>
        <Route path="/beers/:beerId" element=<SingleBeer />></Route>
      </Routes>
    </div>
  );
}

export default App;
