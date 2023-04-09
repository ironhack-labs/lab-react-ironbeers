import './App.css';
import { Route, Routes } from "react-router-dom";
import ListBeers from './components/ListBeers';
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<ListBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
