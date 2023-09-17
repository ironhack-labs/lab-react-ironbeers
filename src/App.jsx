import "./App.css";
import HomePage from "./pages/HomePage"
import AllBeersPage from "./pages/AllBeersPage";
import AddBeerPage from "./pages/AddBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/beers' element={<AllBeersPage />} />
          <Route path='/random-beer' element={<RandomBeerPage />} />
          <Route path='/new-beer' element={<AddBeerPage />} />
          <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
