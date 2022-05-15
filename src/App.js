
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NewBeer from './component/NewBeer';
import Beers from './component/Beers';
import RandomBeer from './component/RandomBeer';
import Homepage from './component/Homepage';
import BeerDetails from './component/BeerDetails';


function App() {
  return (
    <div className="App">

     
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/NewBeer' element={<NewBeer/>}  />
        <Route path='/RandomBeer' element={<RandomBeer/>} />
        <Route path="/Beers" element={<Beers/>}  />
        <Route path="/beers/:id" element={<BeerDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
