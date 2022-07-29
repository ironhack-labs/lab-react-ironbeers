import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/beers" element={<BeersList/>}></Route>
        <Route path="/beers/:id" element={<BeerDetails/>}></Route>
        <Route path="/random-beer" element={<RandomBeer/>}></Route>
        <Route path="/new-beer" element={<CreateBeer/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
