import './App.css';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import HomePage from './pages/HomePage';
import { BrowserRouter , Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >        
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;