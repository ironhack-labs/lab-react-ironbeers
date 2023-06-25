
import './App.css';
import BeersList from './components/BeersList';
import Header from './components/Header';
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/beers' element={<BeersList />} />
        <Route path='/random-beer' element={<Homepage />} />
        <Route path='/new-beer' element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
