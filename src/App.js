import { Routes, Route } from 'react-router-dom';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage />
      <Routes>
        <Route path="/beers" element={ListBeers}></Route>
        <Route path="/random-beer:id" element={RandomBeer}></Route>
        <Route path="/new-beer:id" element={NewBeer}></Route>
      </Routes>
    </div>
  );
}

export default App;
