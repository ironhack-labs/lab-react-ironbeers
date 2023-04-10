import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';
import BeerForm from './components/BeerForm';
import RandomBeer from './components/RandomBeer';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/beers' element={<BeersList />}/>
        <Route path='/beers/:beerId' element={<BeerDetails />}/>
        <Route path='/random-beer' element={<RandomBeer />}/>
        <Route path='/new-beer' element={<BeerForm />}/>
      </Routes>
    </div>
  );
}

export default App;