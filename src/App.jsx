import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import AddBeerPage from './pages/AddBeerPage'
import RandomBeerPage from './pages/RandomBeerPage'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Navbar/>

    <Routes>
      <Route path="/" element={<HomePage/>} ></Route>
      <Route path="/beers" element={<AllBeersPage/> }  ></Route>
      <Route path="/random-beer" element={<RandomBeerPage/>} ></Route>
      <Route path="/new-beer" element={ <AddBeerPage/> } ></Route>
      <Route path="/beers/:beerId" element={ <BeerDetailsPage/> } ></Route>
    </Routes>

    </div>
  );
}

export default App;
