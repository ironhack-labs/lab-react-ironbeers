import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from './components/misc/NavBar/NavBar';
import Home from './views/Home/Home';
import ListBeers from './views/ListBeers/ListBeers';
import SingleBeer from './views/SingleBeer/SingleBeer';
import RandomBeer from './views/RandomBeer/RandomBeer';
import NewBeer from './views/NewBeer/NewBeer';


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
      <Route path="/beers/new" element={<NewBeer />} />
      <Route path='*' element={<Navigate to='/home' />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
