import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import NavBar from './components/NavBar';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
function App() {    
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" element={<><NavBar/><AllBeers/></>}/>
        <Route path="/random-beer" element={<><NavBar/><RandomBeer/></>}/>
        <Route path="/new-beer" element={<><NavBar/><NewBeer/></>}/>
        <Route 
            path="/beers/:beerId"
            element={<><NavBar/><BeerDetails/></>}
        />
      </Routes>
    </div>
  );
}

export default App;
