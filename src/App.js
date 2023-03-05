import "./App.css";

import Homepage from "./pages/Homepage";
import {Routes, Route} from 'react-router-dom';
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeers from "./pages/NewBeers";
import BeersInfo from "./pages/BeersInfo";

function App() {
  return (
    <div className="App">
   
      <Routes>
      <Route path="/" element ={<Homepage />}></Route>
      <Route path="/beers" element ={<Beers/>}></Route>
      <Route path="/newbeers" element ={<NewBeers/>}></Route>
      <Route path="/randombeers" element ={<RandomBeer/>}></Route>
      <Route path="/beersinfo/:id" element ={<BeersInfo/>}></Route>

      </Routes>

      
    </div>
  );
}

export default App;
