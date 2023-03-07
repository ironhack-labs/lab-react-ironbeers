import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AllBeers from './pages/AllBeers/AllBeers'
import OneBeer from './pages/OneBeer/OneBeer'
import NewBeer from './pages/NewBeer/NewBeer'
import RandomBeer from './pages/RandomBeer/RandomBeer'

// import Header from './Components/Header'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbeers" element={<AllBeers />} />
        <Route path="/allbeers/:id" element={<OneBeer />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/newbeer" element={<NewBeer />} />
      </Routes>

    </div>
  );
}

export default App;
