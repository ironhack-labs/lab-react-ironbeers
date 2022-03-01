import { Route, Routes } from 'react-router';
import './App.css';
import AllBeers from './components/AllBeers/AllBeers';
import SingleBeerWrapper from './components/SingleBeer/SingleBeer';
import HomeBeers from './components/HomeBeer/HomeBeer';
import NavBar from './components/NavBar/NavBar';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App container">
      <NavBar/>
      <Routes>
        <Route path="/beers/allBeers" element={<AllBeers/>}/>
        <Route path="/beers/newBeer" element={<NewBeer/>}/>
        <Route path="/beers/randomBeer" element={<RandomBeer/>}/>
        <Route path="/beers/:id" element={<SingleBeerWrapper/>}/>
        <Route path="/" element={<HomeBeers/>}/>
      </Routes>
    </div>
  );
}

export default App;
