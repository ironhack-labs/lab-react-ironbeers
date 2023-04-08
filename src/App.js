import { Link, Routes, Route } from "react-router-dom";
import BeersList from "./routes/BeersList";
import Home from "./routes/Home";
import NewBeer from "./routes/NewBeer";
import RandomBeer from "./routes/RandomBeer";
import SingleBeer from "./routes/SingleBeer";

const App = () => {
  return (
    <div className="App bg-slate-50 w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers/" element={<BeersList />} />
        <Route path="/beers/random-beer/" element={<RandomBeer />} />
        <Route path="/beers/new-beer" element={<NewBeer />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
};

export default App;
