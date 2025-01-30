import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar'
import AllBeersPage from './pages/AllBeersPage'
import AddBeersPage from './pages/AddBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import HomePage from './pages/HomePage'
import RandomBeerPage from './pages/RandomBeerPage'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<AllBeersPage/>}/>
        <Route path="/random-beer" element={<RandomBeerPage/>}/>
        <Route path="/new-beer" element={<AddBeersPage/>}/>
        <Route path="/beers/:beerId" element={<BeerDetailsPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
