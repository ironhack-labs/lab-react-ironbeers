import './App.css';

import {Routes, Route} from 'react-router-dom'

/* import Navbar from './Components/Navbar' */

import HomePage from './Pages/Home';

import AllBeers from './Pages/AllBeers';
import NewBeer from './Pages/NewBeer';
import SingleBeer from './Pages/SingleBeer'
import RandomBeer from './Pages/RandomBeer';

function App() {
  return (
    <div>
      {/* <Navbar> </Navbar> */}
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/allbeers" element={<AllBeers />} />
            <Route path="/allbeers-new" element={<NewBeer />} />
            <Route path="/allbeers/:id" element={<SingleBeer />} />
            <Route path="/randombeer" element={<RandomBeer />} />
        </Routes>
    </div>
  );
}

export default App;
