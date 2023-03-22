import './App.css';
import HomePage from './views/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/misc/Navbar/Navbar';
import AllBeers from './views/AllBeers/AllBeers';
import BeerDetail from './views/BeerDetail/BeerDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Routes>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/beers' element={<AllBeers/>} />
        <Route path='/beers/random-beer' element={<BeerDetail/>} />
        <Route path='/beers/:id' element={<BeerDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
