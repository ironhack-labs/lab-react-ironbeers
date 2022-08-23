import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AllBeersPage from './pages/AllBeersPage/AllBeersPage';
import BeerDetails from './pages/BeerDetails/BeerDetails';
import RandomBeerPage from './pages/RandomBeerPage/RandomBeerPage';
import NewBeer from './pages/NewBeer/NewBeer';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/beers" element={ <AllBeersPage/> }></Route>
        <Route path="/beers/:beerId" element={ <BeerDetails/> }></Route>
        <Route path="/random-beer" element={ <RandomBeerPage/> }></Route>
        <Route path="/new-beer" element={ <NewBeer/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
