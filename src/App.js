import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import ListBeers from "./components/ListBeers";
import Navbar from './components/Navbar';
import NewBeer from "./components/NewBeer"
import RandomBeer from "./components/RandomBeer"
import SingleBeer from "./components/SingleBeer"
import logoHome from "./assets/logoHome.png"




function App() {
  return (
    <div className="App">
      <Navbar />
      <Link to="/">
        <img src={logoHome} alt="example" />
      </Link>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>






    </div >
  );
}

export default App;
