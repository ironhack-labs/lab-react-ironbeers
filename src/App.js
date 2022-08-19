import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import BeerList from './components/pages/BeerList';
import BeerDetail from './components/pages/BeerDetail';
import RandomBeer from './components/pages/RandomBeer';
import CreateBeer from './components/pages/CreateBeer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/beers" element={<BeerList/>}/>
          <Route path="/beers/:beerId" element={<BeerDetail/>}/>
          <Route path="/random-beer" element={<RandomBeer/>}/>
          <Route path="/new-beer" element={<CreateBeer/>}/>

      </Routes>

    </div>
  );
}

export default App;
