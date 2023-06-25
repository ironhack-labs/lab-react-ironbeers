import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ListBeer } from "./components/ListBeer";
import { HomePage } from "./components/HomePage";
import { SingleBeer } from "./components/SingleBeer";
import { RandomBeer } from "./components/RandomBeer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<ListBeer />}></Route>
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
