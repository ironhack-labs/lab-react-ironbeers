import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BeersList from "./pages/BeersList";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:beerId" element={<Details/>}/>

        <Route path="/random-beer" element={<RandomBeer />} />

        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
