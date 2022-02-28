import './App.css';
import { Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage'
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers/>} />
        <Route path='/beers/:beerId' element={<BeerDetails />} s />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </>
  );
}

export default App;
