import './App.css';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import AllBeers from './components/pages/AllBeers';
import RandomBeer from  "./components/pages/RandomBeer"

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/beers" element={<AllBeers />}/>
        <Route path="/random" element={<RandomBeer  />}/>
      </Routes>
    </div>
  );
}

export default App;
