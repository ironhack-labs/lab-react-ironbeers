
import './App.css';
import { Routes,Route } from 'react-router-dom';

//import pages
import HomePage from './Pages/HomePage';
import ListAllBeers from './Pages/ListBeersPage';
import SingleBeer from './Pages/SingleBeerPage';
import RandomBeer from './Pages/RandomBeerPage/index';
import AddBeer from './Pages/NewBeerPage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/beers' element={<ListAllBeers/>}/>
      <Route path='/random' element={<RandomBeer/>}/>
      <Route path='/beers/:id' element={<SingleBeer/>}/>
      <Route path='/new-beer' element={<AddBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
