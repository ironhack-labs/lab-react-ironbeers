import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import OneBeer from './pages/OneBeer';


function App() {
  const location = useLocation().pathname;
  return (
    <div className="App">
      {location !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beer/:id" element={<OneBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App