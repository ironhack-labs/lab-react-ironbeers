import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Beers } from "./components/Beers";
import { RandomBeer } from "./components/RandomBeer";
import { NewBeer } from "./components/NewBeer";
import { Header } from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<Header />}>
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />

        <Route path="*" element={"Error: Page Not Found"} />
      </Route>
    </Routes>
  );
}

export default App;
