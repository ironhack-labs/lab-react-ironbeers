import { Route, Routes } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails';
import BeersList from './components/BeersList';
import CreateBeer from './components/CreateBeer';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path="/beers/:beerId" element={<BeerDetails/> } />
        <Route path="/new-beer" element={<CreateBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
     </Routes>
    </div>
  );
}

export default App;
