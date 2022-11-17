import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Beers } from "./components/Beers";
import { RandomBeer } from "./components/RandomBeer";
import { NewBeer } from "./components/NewBeer";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="*" element={"Error: Page Not Found"} />
      </Routes>
    </>
  );
}

export default App;
