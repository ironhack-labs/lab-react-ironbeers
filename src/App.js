
import './App.css';
import Home from './pages/Home';

import {Routes, Route} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import AllBeers from './pages/AllBeers';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/AllBeers" element={< AllBeers />} />

        <Route path="/RandomBeer" element={< RandomBeer />} />

       
        <Route path="/NewBeer" element={< NewBeer />} />
        <Route path="*" element={< ErrorPage />} />

      </Routes>

    </div>
  );
}

export default App;
