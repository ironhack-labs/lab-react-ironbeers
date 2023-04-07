import { Routes, Route } from "react-router-dom";
import BeersList from "./routes/BeersList";
import Home from "./routes/Home";
import NewBeer from "./routes/NewBeer";
import RandomBeer from "./routes/RandomBeer";
import SingleBeer from "./routes/SingleBeer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<BeersList />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      {/* <Route path='/:id' element={<SingleBeer />} /> */}
    </Routes>
  );
};

export default App;
