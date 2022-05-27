import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import HomePage from "./pages/HomePage";
import Beers from "./pages/Beers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<Beers />} />
        <Route path='/beer/:beerId' element={<SingleBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
