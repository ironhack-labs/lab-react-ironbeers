import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import BeerDetailsPage from "./pages/BeerDetails";
import RandomBeerPage from "./pages/RandomBeerPage";
import NewBeerPage from "./pages/NewBeerPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage /> } ></Route>
        <Route path="/beers" element={<BeersPage /> } ></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage /> } ></Route>
        <Route path="/random-beer" element={<RandomBeerPage /> } ></Route>
        <Route path="/new-beer" element={<NewBeerPage /> } ></Route>
      </Routes>


    </div>
  );
}

export default App;
