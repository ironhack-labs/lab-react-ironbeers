import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Beers from "./pages/beers";
import RandomBeer from "./pages/random-beer";
import NewBeer from "./pages/new-beer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element=<Homepage />></Route>
        <Route path="/beers" element=<Beers />></Route>
        <Route path="/random-beer" element=<RandomBeer />></Route>
        <Route path="/new-beer" element=<NewBeer />></Route>
      </Routes>
    </div>
  );
}

export default App;
