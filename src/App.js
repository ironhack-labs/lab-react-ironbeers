import "./App.css";
import { Home, Navbar, Beers, SingleBeer, RandomBeers, NewBeer } from "./components";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers />} />
      <Route path="/beers/:beerId" element={<SingleBeer />} />
      <Route path="/random-beer" element={<RandomBeers />} />
      <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
