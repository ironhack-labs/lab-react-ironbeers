
import './App.css';
import {Routes, Route} from 'react-router-dom';

// Page imports
import Home from './Pages/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import AllBeer from './Pages/AllBeer/AllBeer';
import RandomBeer from './Pages/RandomBeer/RandomBeer';
import NewBeer from './Pages/NewBeer/NewBeer';
import BeerDetails from './Pages/BeerDetails/BeerDetails';


function App() {
  return (
    <div className="App">
        <NavBar/>
  

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/all-beer" element={<AllBeer/>}></Route>
        <Route path="/random-beer" element={<RandomBeer/>}></Route>
        <Route path="/new-beer" element={<NewBeer/>}></Route>
        <Route path="/beer-details/:id" element={<BeerDetails/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
