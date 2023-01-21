import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import CreateBeer from './components/CreateBeer';
import Home from './components/Home';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">



      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beers" element={<AllBeers />} />
            <Route path="/beers/:beerId" element={<BeerDetails />} />
            <Route path="/random-beer" element={<RandomBeer />} />
            <Route path="/new-beer" element={<CreateBeer />} />

        </Routes>



    </div>
  );
}

export default App;
