import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import BeersList from './components/BeersList';
import NewBeer from './components/NewBeer';
import BeersDetail from './components/BeersDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersList />} />
        <Route path="/beers/:id" element={<BeersDetail />} />
        <Route path="/random-beer" element={<BeersDetail />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </>
  );
}

export default App;
