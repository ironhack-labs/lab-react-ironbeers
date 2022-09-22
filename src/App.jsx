import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import BeersPage from './pages/BeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import RandomPage from './pages/RandomPage';
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/beers'} element={<BeersPage />} />
        <Route path={'/beers/:id'} element={<SingleBeerPage />} />
        <Route path={'/randombeer'} element={<RandomPage />} />
        <Route path={'/newbeer'} element={<NewBeerPage />} />
      </Routes>

    </div>
  );
}

export default App;
