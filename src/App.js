import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import BeerPage from './pages/beerpage'
import ChosenBeerPage from './pages/chosenbeerpage'
import RandomBeerPage from './pages/randombeerpage'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/BeerPage' element={<BeerPage/>}/>
      <Route path='/beers/:beerId' element={<ChosenBeerPage/>}/>
      <Route path='/new'/>
      <Route path='/random' element={<RandomBeerPage/>}/>
      <Route path='/search?q=' />
    </Routes>
    </div>
  );
}

export default App;
