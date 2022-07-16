import './App.css';
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/*   Add <Route /> components between <Routes> and </Routes>   */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allbeers' element={<ListBeers />} />
        <Route path="/addnewbeer" element={ <NewBeer /> } />
        <Route path="/random" element={ <RandomBeer /> } />
        <Route path="/onebeer/:id" element={ <SingleBeer /> } />
 
      </Routes>
    </div>
  );
}
export default App;