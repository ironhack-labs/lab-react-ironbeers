import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers';
import CreateBeer from './components/CreateBeer';
import Details from './components/Details';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/beers' element={<AllBeers />}/>
      <Route path='/beers/:id' element={<Details />}/>
      <Route path='/random' element={<RandomBeer />}/>
      <Route path='/create' element={<CreateBeer />}/>
     </Routes>
    </div>
  );
}

export default App;
