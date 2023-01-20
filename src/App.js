import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  const devAPI = process.env.REACT_APP_API_URL;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers devAPI={devAPI} />} />
        <Route path="/beers/:id" element={<SingleBeer devAPI={devAPI} />} />
        <Route path="/random-beer" element={<RandomBeer devAPI={devAPI} />} />
        <Route path="/new-beer" element={<NewBeer devAPI={devAPI} />} />
      </Routes>
    </div>
  );
}

export default App;
