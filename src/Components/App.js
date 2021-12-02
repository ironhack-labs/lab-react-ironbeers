import { Routes, Route, Link } from 'react-router-dom';
import '../App.css';
import Navigation from './Navigation/Navigation';
import AllBeers from './AllBeers/AllBeers';
import SingleBeer from './SingleBeer/SingleBeer';
import NewBeer from './NewBeer/NewBeer';


function App() {

  return (
    <div className="App">
      <div className="conainter flex center">
        <div className="hero"><Link to="/"><img src="https://www.pinclipart.com/picdir/big/421-4217905_collection-of-home-icon-blue-png-clipart.png" alt="home" /></Link></div>
        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/all" element={<AllBeers  />} />
          <Route path="/beer" element={<SingleBeer />} />
          <Route path="/beer/:id" element={<SingleBeer />} />
          <Route path="/new" element={<NewBeer />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
