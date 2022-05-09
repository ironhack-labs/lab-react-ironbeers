import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import BeersPage from "./pages/Beers";
import BeerPage from "./pages/Beer";
import NewBeerPage from "./pages/NewBeer";
import RandomBeerPage from "./pages/RandomBeer";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<BeersPage><Navbar /></BeersPage>} />
        <Route path="/beer/:beerId" element={<BeerPage><Navbar /></BeerPage>} />        
        <Route path="/random-beer" element={<RandomBeerPage><Navbar /></RandomBeerPage>} />
        <Route path="/new-beer" element={<NewBeerPage><Navbar /></NewBeerPage>} />        
      </Routes>  
    </div>
  );
}

export default App;
