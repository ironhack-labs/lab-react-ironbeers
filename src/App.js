import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Beer from './Pages/Beer';
import NewBeer from './Pages/NewBeer';
import RandomBeer from './Pages/RandomBeer';
import BeerDetails from './components/BeerDetails';


function App() {
 

  return (
    <div className="App">
<Routes>
<Route path="/" element={<Home/>}/>
  <Route path="beer" element={<Beer/>}/>
  <Route path="newBeer" element={<NewBeer/>}/> 
  <Route path="randomBeer" element={<RandomBeer/>}/>
  <Route path="/beer/:id" element={<BeerDetails />}/>
</Routes>

    </div>
  );
}

export default App;
