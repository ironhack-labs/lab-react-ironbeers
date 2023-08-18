
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Details from './components/Details';




function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" exact element= <Home /> />
          <Route path="/beers" element={<Beers/>} />
          <Route path="/random-beer" element={RandomBeer} />
          <Route path="/new-beer" element={NewBeer} />
          <Route path="/beers/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
