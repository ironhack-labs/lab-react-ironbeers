import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Beers from './pages/Beers';
import BeerDetailsPage from './pages/BeerDetailsPage';
import './App.css';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Homepage/>} />
        <Route path="beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetailsPage />} />
        <Route path="random-beer" element={<RandomBeerPage />} />
        <Route path="new-beer" element={<NewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
