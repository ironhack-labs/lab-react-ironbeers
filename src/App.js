import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import HomePage from './pages/HomePage';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Header from './components/Header';
import BeerDetails from './pages/BeerDetails';

function App() {
  const {pathname } = useLocation();

  return (
    <div className="App">

      { pathname !== "/" && <Header/> }

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/beers" element={<Beers/>}/>
        <Route path="/beers/:id" element={<BeerDetails/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
