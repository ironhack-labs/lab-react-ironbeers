import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListBeers from "./pages/ListBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import SingleBeer from "./pages/SingleBeer";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/random-beer" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer/:id" element={<SingleBeer />} />
      </Routes>
    </div>
  );
};

export default App;
