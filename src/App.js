import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/beers' element={<BeersList />}/>
        <Route path='/beers/:beerId' element={<BeerDetails />}/>
        <Route path='/random-beer' element={<BeerDetails />}/>
      </Routes>
      
    </div>
  );
}

export default App;
