import { Route, Routes } from 'react-router';
import './App.css';
import AllBeers from './components/AllBeers/AllBeers';
import HomeBeers from './components/HomeBeer/HomeBeer';
import NavBar from './components/NavBar/NavBar';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App container">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeBeers/>}/>
        <Route path="/allBeers" element={<AllBeers/>}/>
        <Route path="/newBeer" element={<NewBeer/>}/>
        <Route path="/randomBeer" element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
