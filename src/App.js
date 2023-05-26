import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/homePage';
import Beers from './components/beers';
import RandomBeer from './components/random-beer';
import NewBeer from './components/new-beer';
import Navbar from './components/navBar';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path='/randombeer' element={<RandomBeer/>}/>
        <Route path='/newbeer' element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
