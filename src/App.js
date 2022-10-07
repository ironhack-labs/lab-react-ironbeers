import './App.css';
import { Navbar } from './components/Nabvar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BeersList from './pages/BeersList';
import Beer from './pages/Beer';
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
     <Navbar/>

      <div className="Screens-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/beers" element={<BeersList />}></Route>
          <Route path='/beers/:beerId' element={<Beer />}></Route>
          <Route path="/random-beer" element={<RandomBeer />}></Route>
          <Route path="/new-beer" element={<NewBeer/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;