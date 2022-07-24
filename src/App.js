import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import AllBeers from './pages/AllBeers';
import RandonBeer from './pages/RandomBeer';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>

      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/beers/:beerId' element={<BeerDetails/>}/>
      <Route path="/beers" element={<AllBeers/>}/>
      <Route path="/beer/new" element={<NewBeer/>}/>
      <Route path='/beer/random' element={<RandonBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
git 