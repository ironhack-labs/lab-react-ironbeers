import './App.css';
import { Routes, Route, Navigate } from "react-router";
import Navbar from './components/Navbar/Navbar';
import { Home } from './views/Home/Home';
import { Allbeers } from './components/Allbeers/Allbeers';
import { RamdonBeer } from './components/RamdonBeer/RamdonBeer';
import { OneBeer } from './components/OneBeer/OneBeer';
import { NewBeer } from './components/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/allBeers' element={<Allbeers />}/>
        <Route path='/allBeers/:id' element={<OneBeer />}/>
        <Route path='/ramdonBeer' element={<RamdonBeer />}/>
        <Route path='/newBeer' element={<NewBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
