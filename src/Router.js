import { Routes, Route } from 'react-router-dom';
import { HomePage, Beers, RandomBeer, NewBeer, BeerDetails } from './pages';

function Router() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    );
}

export default Router;