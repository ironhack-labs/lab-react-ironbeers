import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import BeersPage from './Pages/AllBeers';
import AddBeerPage from './Pages/NewBeer';
import randomizeBeerPage from './Pages/RandomBeer';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<BeersPage/>} />
        <Route path="/beers" element={<BeersPage/>} />
        <Route path="/new" element={<AddBeerPage/>} />
        <Route path="/random" element={<randomizeBeerPage/>} />
      </Routes>
    </div>
  );
}

export default App;
