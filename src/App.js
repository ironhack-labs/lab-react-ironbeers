import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from './Pages/Home';
import Allbeers from './Pages/Allbeers';
import Beerdetails from './Pages/Beerdetails';
import RandomBeerSelector from './Pages/Randombeer';
import Newbeer from './Pages/Newbeer';
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path='/beers' element={<Allbeers/>}/>
      <Route path='/beers/:beerId' element={<Beerdetails/>}/>
      <Route path='/randombeer' element={<RandomBeerSelector/>}/>
      <Route path='/newbeer' element={<Newbeer/>}/>
      </Routes>
    </div>
  )
}

export default App;