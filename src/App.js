import { Routes, Route } from "react-router-dom";
import './App.css';
import BeerList from './pages/BeerList'
import BeerHome from './pages/BeerHome'
import BeerSpecifications from './pages/BeerSpecifications'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/allbeers" element={<BeerList />} />
      <Route path="/" element={<BeerHome />} />
      <Route path="/beers/:beersId" element={<BeerSpecifications />} />
      <Route path="/randombeer" element={<RandomBeer />} />
      <Route path="/newbeer" element={<NewBeer />} />

     </Routes>
    </div>
  );
}

export default App;
