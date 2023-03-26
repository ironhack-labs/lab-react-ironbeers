import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/misc/NavBar/NavBar';
import Home from './views/Home/Home';
import ListBeers from './views/ListBeers/ListBeers';
import SingleBeer from './views/SingleBeer/SingleBeer';
import RandomBeer from './views/RandomBeer/RandomBeer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container my-4">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="beers" element={<ListBeers />} />
      <Route path="/beers/:id" element={<SingleBeer />} />
      <Route path="beers/random" element={<RandomBeer />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
