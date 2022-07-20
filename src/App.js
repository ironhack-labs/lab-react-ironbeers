import logo from './logo.svg';
import './App.css';
import Home from "./pages/home";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Beers from "./pages/beers"
import SingleBeer from "./pages/singlebeer"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/beers" element={ <Beers /> }/>
        <Route path="/singlebeer/:id" element={ <SingleBeer /> } />
      </Routes>
    </div>
  );
}

export default App;
