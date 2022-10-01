import Homepage from "./Pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Beers from "./Pages/Beers/Beers";
import RandomBeer from "./Pages/RandomBeer/RandomBeer";
import NewBeer from "./Pages/NewBeer/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
