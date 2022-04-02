import "./App.css";
import { Home, Navbar, Beers, SingleBeer } from "./components";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/beers" element={<Beers/>} />
      <Route path="/beers/:beerId" element={<SingleBeer/>} />
      </Routes>
    </div>
  );
}

export default App;