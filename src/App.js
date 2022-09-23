import './App.css';
import { Routes, Route } from 'react-router-dom'

//import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import Error from "./pages/Error";

import Navbar from './components/Navbar';


function App() {
   return ( 
   <div className="App">
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/new" element={<NewBeer/>} />
          <Route path="/beers/random" element={<RandomBeer/>} />
          <Route path="*" element={ <Error /> } /> 
      </Routes>
    </div>
    )
}

export default App;


/*<Link to="/beers"> All Beers </Link> 
       Random Beer </Link> 
      <Link to="/newbeer"> NewBeer </Link> */
