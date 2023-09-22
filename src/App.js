import logo from './logo.svg';
import './App.css';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom'
import BeerDetails from './pages/BeerDetails';
import {Link} from 'react-router-dom'
import beerpic from './assets/beers.png'
import randomPicBeer from './assets/random-beer.png'
import newPicBeer from './assets/new-beer.png'
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/all-beers' element={<Beers></Beers>}></Route>
        <Route path='/random-beer' element={<RandomBeer></RandomBeer>}></Route>
        <Route path='/new-beer' element={<NewBeer></NewBeer>}></Route>
        <Route path="/beers/:beerId" element={<BeerDetails></BeerDetails>}  />
      </Routes>
      <Link to='/all-beers'> 
      <img src={beerpic} alt="" />
      <h2> All Beers</h2> 
      </Link>
      <Link to='/random-beer'>
      <img src={randomPicBeer} alt="" />
      <h2>Random beer</h2> </Link>
      <Link to='/new-beer'>
      <img src={newPicBeer} alt="" />
      <h2>NewBeer</h2> </Link>
      
      
      
    </div>
  );
}

export default App;
