import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/Home';
import Navbar from './Components/Navbar'
import ListBeers from './Pages/ListBeers'
import SingleBeer from './Pages/SingleBeer'
import RandomBeer from './Pages/RandomBeer'

function App() {
  return (
    <div>
        <Navbar/>
    <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/beers' element={<ListBeers/>}/>
  <Route path='/beers/:id' element={<SingleBeer/>}/>
  <Route path='/random-beer' element={<RandomBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
