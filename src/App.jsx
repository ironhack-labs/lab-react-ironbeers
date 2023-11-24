import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AllBeersPage from './pages/AllBeersPage'
import RandomBeerPage from './pages/RandomBeerPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import AddBeerPage from './pages/AddBeerPage'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/beers/:beer_id" element={<BeerDetailsPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
