import "./App.css";
import AddBeerPage from "./pages/AddBeerPage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import HomePage from "./pages/HomePage";
import BeerDetailsPage from './pages/BeerDetailsPage'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {
  return (
    <main>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/beers' element={<AllBeersPage/>}></Route>
      <Route path='/random-beer' element={<RandomBeerPage/>}></Route>
      <Route path='/new-beer' element={<AddBeerPage/>}></Route>
      <Route path='/beers/:id' element={<BeerDetailsPage/>}></Route>
    </Routes>
  </main>
  );
}

export default App;