
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import axios from 'axios';
import BeersList from './component/BeersList';
import HomePage from './component/Homepage';
import BeerDetails from './component/BeerDetails';
import RandomBeer from './component/RandomBeer';
import CreateBeer from './component/CreateBeer';

function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>


      <Routes>
        <Route path="/beers" element={<BeersList></BeersList>}>
        </Route>
        <Route path="/" element={<HomePage></HomePage>}>
        </Route>
        <Route path='/beers/:beerId' element={<BeerDetails />}></Route>
        <Route path='/random-beer' element={<RandomBeer />}></Route>
        <Route path='/new-beer' element={<CreateBeer />}></Route>


      </Routes>

    </div>
  );
}

export default App;
