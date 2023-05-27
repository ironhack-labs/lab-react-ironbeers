import './App.css';
import {Route, Routes} from'react-router-dom';
import Home from './Pages/Home';
import Beers from './Pages/Beers';
import SingleBeer from './Pages/SingleBeer';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/beers" element={<Beers/>} />
      <Route path="beers/:id" element={<SingleBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
