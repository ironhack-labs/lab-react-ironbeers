import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBeers from './views/AllBeers/AllBeers';
import BeerDetail from './views/BeerDetail/BeerDetail';
import Home from './views/Home/Home';
import NewBeer from './views/NewBeer/NewBeer';
import RandomBeer from './views/RandomBeer/RandomBeer';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/beers' element={<AllBeers />}/>
          <Route path='/beers/:beerId' element={<BeerDetail />}/>
          <Route path='/beers/random-beer' element={<RandomBeer />}/>
          <Route path='/beers/new' element={<NewBeer />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
