
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Beers from './pages/Beers/Beers';
import BeerDetails from './pages/Beers/BeerDetails';
import BeerRandom from './pages/Beers/BeerRandom';
import BeerNew from './pages/Beers/BeerNew';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/beers' element={<Beers />} />
        <Route path='/beers/:beerId' element={<BeerDetails />} />
        <Route path='/random' element={<BeerRandom />} />
        <Route path='/new-beer' element={<BeerNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
