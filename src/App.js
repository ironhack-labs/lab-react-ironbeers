import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Beers from './Beers';
import CreateBeers from './CreateBeers';
import RandomBeers from './RandomBeers';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/create-beers' element={<CreateBeers />} />
        <Route path='/random-beers' element={<RandomBeers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
