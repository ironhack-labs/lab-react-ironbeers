import { Route, Routes } from 'react-router';
import Home from './views/Home/Home';
import Navbar from './components/misc/Navbar/Navbar';
import './App.css';
import BeerList from './components/misc/BeerList/BeerList';
import RandomBeer from './components/misc/RandomBeer/RandomBeer';
import NewBeer from './components/misc/NewBeer/NewBeer';
import SingleBeer from './components/misc/SingleBeer/SingleBeer';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/beers' element={<BeerList></BeerList>}></Route>
        <Route path='/beers/:id' element={<SingleBeer></SingleBeer>}></Route>
        <Route path='/random-beer' element={<RandomBeer></RandomBeer>}></Route>
        <Route path='/new-beer' element={<NewBeer></NewBeer>}></Route>
      </Routes>
    </div>
  );
}

export default App;
