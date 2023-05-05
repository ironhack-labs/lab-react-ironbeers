import './App.css';
import HomePage from "./pages/HomePage"
import BeersPage from "./pages/BeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import NewBeerPage from "./pages/NewBeerPage"
import OneBeerPage from "./pages/OneBeerPage"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beers/:beerId" element={<OneBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
