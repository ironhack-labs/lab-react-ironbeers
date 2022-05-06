import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllBeers from './components/pages/AllBeers';
import RandomBeer from  "./components/pages/RandomBeer"
import SingleBeer from './components/SingleBeer';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/random" element={<RandomBeer  />}/>
        <Route path="/:id" element={<SingleBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
