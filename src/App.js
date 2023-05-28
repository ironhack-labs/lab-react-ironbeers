import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import ListOfBeers from './pages/ListOfBeers';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/beers" element={<ListOfBeers/>}/>
      <Route path="/beers/:id" element={<BeerDetailsPage/>}/>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>






     </Routes>
    </div>
  );
}

export default App;
