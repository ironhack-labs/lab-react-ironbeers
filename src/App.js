import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage';
import SingleBeerPage from './pages/SingleBeerPage';
// import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<NewBeerPage />} />
        <Route path={'/beers/:id'} element={<SingleBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
