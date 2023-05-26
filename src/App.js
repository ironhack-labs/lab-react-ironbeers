import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import BeersPage from './Pages/BeersPage';
import RandomBeerPage from './Pages/RandomBeerPage';
import NewBeerPage from './Pages/NewBeerPage';
import BeerDetail from './Pages/BeerDetail';

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