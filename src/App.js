import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import BeerList from "./components/BeerList";
import SingleBeerDetails from "./components/SingleBeerDetails";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:beerId" element={<SingleBeerDetails />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        {/* 
        <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
