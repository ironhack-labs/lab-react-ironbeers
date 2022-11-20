import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import NewBeer from './components/NewBeer';
import RandomBeers from './components/RandomBeers';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SingleBeer from './components/SingleBeer';





function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/all-beers" element={<AllBeers/>} />
      <Route path="/random-beer/random" element={<RandomBeers/>} />
      <Route path="/new-beer" element={<NewBeer/>} />
      <Route path="/single-beer/:id" element={<SingleBeer/>}/>
  </Routes>
  </div>
  );
}

export default App;
