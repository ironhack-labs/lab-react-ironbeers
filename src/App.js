import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/navbar/NavBar';
import BeersPage from './pages/BeersPage';
import CreateBeer from './pages/NewBeerPage';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <Routes>
        <Route path='/beers' element={<BeersPage />}></Route>
        <Route path='/beers/random' element={<RandomBeer />}></Route>
        <Route path='/beers/create' element={<CreateBeer />}></Route>
        <Route path='/beers/:beerid' element={<SingleBeer />}></Route>
      </Routes>
    </div >
  );
}

export default App;
