import './App.css';
import HomePage from './components/HomePage';
import {Routes,Route} from 'react-router-dom'
import AllBeer from './components/AllBeer';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/all-beer' element={<AllBeer />}/>
        <Route path='/beer/:beerId' element={<BeerDetail />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
