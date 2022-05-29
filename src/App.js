import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import BeerDetail from './pages/BeerDetail'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/beers' element={<BeersPage/>}/>
      <Route path='/random-beer' element={<RandomBeerPage/>}/>
      <Route path='/new-beer' element={<NewBeerPage/>}/>
      <Route path='/:id' element={<BeerDetail/>}/>
    </Routes>

    </div>
  );
}

export default App;
