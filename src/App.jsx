import './App.css';
import NewBeer from './Components/NewBeer/NewBeer';
import RandomBeer from './Components/RandomBeer/RandomBeer';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar/NavBar';
import BeersPage from './pages/BeersPage/BeersPage';
import BeerDetails from './pages/BeerDetails/BeerDetails';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beer_id" element={<BeerDetails />} />
      </Routes>

    </div>
  );
}

export default App;
