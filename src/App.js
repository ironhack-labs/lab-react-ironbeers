import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import BeersPage from './pages/BeersPage/BeersPage';
import DetailsOneBeerPage from './pages/DetailsOneBeerPage/DetailsOneBeerPage';
import RandomBeerPage from './pages/RandomBeerPage/RandomBeerPage';
import NewBeerPage from './pages/NewBeerPage/NewBeerPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<BeersPage />} />
          <Route path="/beers/:id" element={<DetailsOneBeerPage />} />
          <Route path="/random-beer" element={<RandomBeerPage />} />
          <Route path="/new-beer" element={<NewBeerPage />} />
        </Routes>

      </header>
    </div>
  );
}

export default App;
