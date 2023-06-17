import logo from './logo.svg';
import './App.css';
import HomePage from './component/HomePage';
import { Route, Routes } from 'react-router-dom';
import AllBeers from './component/AllBeers';
import RandomBeer from './component/RandomBeer';
import NewBeer from './component/NewBeer';
import BeerDetail from './component/BeerDetail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/beers" element= {<AllBeers />} />
        <Route path="/BeerDetail/:_id" element={<BeerDetail />} />
        <Route path="/random-beer" element= {<RandomBeer />} />
        <Route path="/new-beer" element= {<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
