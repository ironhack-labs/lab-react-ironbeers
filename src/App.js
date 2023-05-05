import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <Link to={'/'}>Home</Link>}
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/beers' element={ <Beers />} />
        <Route path='/beers/:id' element={ <BeerDetails />} />
        <Route path='/random-beer' element={ <BeerDetails random={true} /> } />
        <Route path='/new-beer' element={ <NewBeer /> } />
      </Routes>
      
    </div>
  );
}

export default App;
