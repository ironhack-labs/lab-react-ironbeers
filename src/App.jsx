import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';


function App() {
  return (
    <div className='App'>

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/' element={<Layout />}>
            <Route path='*' element={<p>404 Page Not Found!</p>} />
            <Route path='/beers' element={<AllBeers />} />
            <Route path='/beers/:id' element={<BeerDetails />} />
            <Route path='/random-beer' element={<BeerDetails />} />
            <Route path='/new-beer' element={<NewBeer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;