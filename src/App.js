import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router'
import Home from './views/Home/home'
import BeerList from './views/BeerList/beerList'
import BeerDetails from './views/BeerDetails/beerDetails'
import NewBeer from './views/NewBeer/newBeer'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home/> }/>
        <Route path="/beers" element={ <BeerList/> }/>
        <Route path="/beers/:id" element={ <BeerDetails/> }/>
        <Route path="/new-beer" element={ <NewBeer/> }/>
      </Routes>
    </div>
  );
}

export default App;
