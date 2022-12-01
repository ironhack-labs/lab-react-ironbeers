import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import NavBar from './components/Navbar';
import { Container } from 'react-bootstrap';
import BeerList from './pages/BeerListPage';
import BeerDetail from './pages/BeerDetailPage';
import RandomBeer from './pages/RandomBeerPage';
import NewBeer from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beersList' element={<BeerList />} />
          <Route path='/beerDetail/:id' element={<BeerDetail />} />
          <Route path='/randomBeer' element={<RandomBeer />} />
          <Route path='/newBeer' element={<NewBeer />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
