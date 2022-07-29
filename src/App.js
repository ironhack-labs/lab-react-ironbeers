import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllBeers from "./components/AllBeers";
import Homepage from "./components/Homepage";
import Main from "./components/Main";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";

function App() {
  return (
    <div className="App">
      <Main />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random" element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
